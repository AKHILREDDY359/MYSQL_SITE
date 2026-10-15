import { STORAGE_KEYS, loadFromStorage, saveToStorage, clearAllAppData } from '../utils/storage.js';

export const QUESTION_STATUS = {
  NOT_STARTED: 'not_started',
  ATTEMPTED: 'attempted',
  SOLVED: 'solved',
  NEEDS_REVIEW: 'needs_review'
};

export function getAllProgress() {
  return loadFromStorage(STORAGE_KEYS.PROGRESS, {});
}

export function getQuestionStatus(qid) {
  const progress = getAllProgress();
  return progress[qid]?.status || QUESTION_STATUS.NOT_STARTED;
}

export function getQuestionProgress(qid) {
  const progress = getAllProgress();
  return progress[qid] || {
    status: QUESTION_STATUS.NOT_STARTED,
    attempts: 0,
    incorrectCount: 0,
    lastAttemptAt: null,
    solvedAt: null,
    notes: ''
  };
}

export function saveQuestionDraft(qid, sql) {
  const drafts = loadFromStorage(STORAGE_KEYS.DRAFTS, {});
  drafts[qid] = sql;
  saveToStorage(STORAGE_KEYS.DRAFTS, drafts);
}

export function getQuestionDraft(qid, defaultSql = '') {
  const drafts = loadFromStorage(STORAGE_KEYS.DRAFTS, {});
  return drafts[qid] !== undefined ? drafts[qid] : defaultSql;
}

export function setLastActiveQuestion(qid) {
  saveToStorage(STORAGE_KEYS.LAST_QUESTION_ID, qid);
}

export function getLastActiveQuestion(defaultId = 1) {
  return loadFromStorage(STORAGE_KEYS.LAST_QUESTION_ID, defaultId);
}

export function recordQueryRun(qid, sql) {
  saveQuestionDraft(qid, sql);
  const progress = getAllProgress();
  const current = progress[qid] || {
    status: QUESTION_STATUS.NOT_STARTED,
    attempts: 0,
    incorrectCount: 0,
    lastAttemptAt: null,
    solvedAt: null
  };

  // If question is not started, running a query marks it as attempted without marking solved
  if (current.status === QUESTION_STATUS.NOT_STARTED) {
    current.status = QUESTION_STATUS.ATTEMPTED;
  }
  current.lastAttemptAt = new Date().toISOString();
  progress[qid] = current;
  saveToStorage(STORAGE_KEYS.PROGRESS, progress);
}

export function recordAnswerSubmission(qid, isCorrect, sql, details = {}) {
  saveQuestionDraft(qid, sql);
  const progress = getAllProgress();
  const current = progress[qid] || {
    status: QUESTION_STATUS.NOT_STARTED,
    attempts: 0,
    incorrectCount: 0,
    lastAttemptAt: null,
    solvedAt: null
  };

  current.attempts = (current.attempts || 0) + 1;
  current.lastAttemptAt = new Date().toISOString();

  if (isCorrect) {
    current.status = QUESTION_STATUS.SOLVED;
    if (!current.solvedAt) {
      current.solvedAt = new Date().toISOString();
    }
    current.lastError = null;
  } else {
    current.incorrectCount = (current.incorrectCount || 0) + 1;
    // Keep solved if it was already solved previously, else attempted
    if (current.status !== QUESTION_STATUS.SOLVED && current.status !== QUESTION_STATUS.NEEDS_REVIEW) {
      current.status = QUESTION_STATUS.ATTEMPTED;
    }
    current.lastError = details.feedback || 'Incorrect query result';
  }

  progress[qid] = current;
  saveToStorage(STORAGE_KEYS.PROGRESS, progress);
  return current;
}

export function toggleQuestionReview(qid) {
  const progress = getAllProgress();
  const current = progress[qid] || {
    status: QUESTION_STATUS.NOT_STARTED,
    attempts: 0,
    incorrectCount: 0
  };

  if (current.status === QUESTION_STATUS.NEEDS_REVIEW) {
    current.status = current.solvedAt ? QUESTION_STATUS.SOLVED : (current.attempts > 0 ? QUESTION_STATUS.ATTEMPTED : QUESTION_STATUS.NOT_STARTED);
  } else {
    current.status = QUESTION_STATUS.NEEDS_REVIEW;
  }

  progress[qid] = current;
  saveToStorage(STORAGE_KEYS.PROGRESS, progress);
  return current.status;
}

export function getBookmarks() {
  return loadFromStorage(STORAGE_KEYS.BOOKMARKS, []);
}

export function toggleBookmark(qid) {
  const bookmarks = getBookmarks();
  const index = bookmarks.indexOf(qid);
  let updated;
  if (index >= 0) {
    updated = bookmarks.filter(id => id !== qid);
  } else {
    updated = [...bookmarks, qid];
  }
  saveToStorage(STORAGE_KEYS.BOOKMARKS, updated);
  return updated.includes(qid);
}

export function isBookmarked(qid) {
  const bookmarks = getBookmarks();
  return bookmarks.includes(qid);
}

export function calculateDashboardMetrics(questions = []) {
  const progress = getAllProgress();
  const total = questions.length;
  
  let solved = 0;
  let attempted = 0;
  let pending = 0;
  let incorrectQuestionsCount = 0;
  let needsReview = 0;
  let solvedToday = 0;
  let totalSubmissions = 0;
  let totalSuccessfulSubmissions = 0;

  const todayStr = new Date().toISOString().slice(0, 10);

  const topicStats = {};
  const difficultyStats = {
    Easy: { total: 0, solved: 0 },
    Medium: { total: 0, solved: 0 },
    Hard: { total: 0, solved: 0 }
  };

  questions.forEach(q => {
    // Topic aggregation
    if (!topicStats[q.topic]) {
      topicStats[q.topic] = { total: 0, solved: 0, attempted: 0 };
    }
    topicStats[q.topic].total += 1;

    // Difficulty aggregation
    const diff = q.difficulty || 'Easy';
    if (!difficultyStats[diff]) {
      difficultyStats[diff] = { total: 0, solved: 0 };
    }
    difficultyStats[diff].total += 1;

    const p = progress[q.id];
    if (!p || p.status === QUESTION_STATUS.NOT_STARTED) {
      pending += 1;
    } else {
      if (p.status === QUESTION_STATUS.SOLVED) {
        solved += 1;
        topicStats[q.topic].solved += 1;
        difficultyStats[diff].solved += 1;

        if (p.solvedAt && p.solvedAt.slice(0, 10) === todayStr) {
          solvedToday += 1;
        }
      } else if (p.status === QUESTION_STATUS.ATTEMPTED) {
        attempted += 1;
        topicStats[q.topic].attempted += 1;
      } else if (p.status === QUESTION_STATUS.NEEDS_REVIEW) {
        needsReview += 1;
        if (p.solvedAt) {
          solved += 1;
          topicStats[q.topic].solved += 1;
          difficultyStats[diff].solved += 1;
        } else if (p.attempts > 0) {
          attempted += 1;
        }
      }

      if (p.incorrectCount > 0 && p.status !== QUESTION_STATUS.SOLVED) {
        incorrectQuestionsCount += 1;
      }

      totalSubmissions += (p.attempts || 0);
      if (p.status === QUESTION_STATUS.SOLVED) {
        totalSuccessfulSubmissions += 1;
      }
    }
  });

  const accuracy = totalSubmissions > 0
    ? Math.round((solved / (solved + incorrectQuestionsCount || 1)) * 100)
    : 0;

  const completionPercentage = total > 0 ? Math.round((solved / total) * 100) : 0;

  return {
    total,
    solved,
    attempted,
    pending,
    incorrectQuestionsCount,
    needsReview,
    solvedToday,
    accuracy,
    completionPercentage,
    topicStats,
    difficultyStats
  };
}

export function resetProgress() {
  clearAllAppData();
}
