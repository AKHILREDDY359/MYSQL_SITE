import fs from 'fs';
import path from 'path';
import initSqlJs from 'sql.js';
import { TABLES_SCHEMA } from '../src/data/schema.js';
import { SEED_SQL } from '../src/data/seedData.js';
import { TOPIC1_QUESTIONS } from './questions/topic1_fundamentals.js';
import { TOPIC2_QUESTIONS } from './questions/topic2_where.js';
import { TOPIC3_QUESTIONS } from './questions/topic3_sorting.js';
import { TOPIC4_QUESTIONS } from './questions/topic4_aggregates.js';
import { TOPIC5_QUESTIONS } from './questions/topic5_groupby.js';
import { TOPIC6_QUESTIONS } from './questions/topic6_having.js';
import { TOPIC7_QUESTIONS } from './questions/topic7_joins.js';
import { TOPIC8_QUESTIONS } from './questions/topic8_subqueries.js';
import { TOPIC9_QUESTIONS } from './questions/topic9_interview_ready.js';
import { TOPIC10_QUESTIONS } from './questions/topic10_case_expressions.js';

export const EXPECTED_TOPIC_TARGETS = {
  'SQL Fundamentals': 25,
  'WHERE & Operators': 40,
  'Sorting & Limiting': 20,
  'Aggregate Functions': 30,
  'GROUP BY': 35,
  'HAVING': 25,
  'SQL JOINs': 75,
  'Subqueries': 50,
  'CASE Expressions': 25,
  'Interview Ready Questions': 50
};

async function buildAndVerify() {
  console.log('=== Building & Verifying 300 SQL Practice Questions ===\n');

  // 1. Initialize SQLite Database via SQL.js
  const SQL = await initSqlJs();
  const db = new SQL.Database();

  for (const table of TABLES_SCHEMA) {
    db.run(table.createSql);
  }
  db.run(SEED_SQL);

  console.log('Database initialized successfully with 5 tables.\n');

  // 2. Load existing 50 questions and map to target topics
  const existing50Raw = JSON.parse(
    fs.readFileSync(path.resolve('scripts/questions/existing50.json'), 'utf8')
  );

  const existing50Mapped = existing50Raw.map(q => {
    let targetTopic = q.topic;
    let targetSubtopic = q.topic;

    if (q.id >= 1 && q.id <= 17) {
      targetTopic = 'WHERE & Operators';
      if ([1, 2, 3, 12].includes(q.id)) {
        targetSubtopic = 'Basic Filtering & Comparisons';
      } else if ([4, 5, 8, 13, 15].includes(q.id)) {
        targetSubtopic = 'Logical Operators & Precedence';
      } else if ([6, 7, 16, 17].includes(q.id)) {
        targetSubtopic = 'Range & Set Filtering (BETWEEN / IN)';
      } else {
        targetSubtopic = 'Pattern Matching & Wildcards (LIKE)';
      }
    } else if (q.id >= 18 && q.id <= 26) {
      targetTopic = 'Aggregate Functions';
      targetSubtopic = 'Core Aggregates (COUNT, SUM, AVG, MIN, MAX)';
    } else if (q.id >= 27 && q.id <= 35) {
      targetTopic = 'GROUP BY';
      targetSubtopic = 'Standard Grouping & Single-Column Aggregations';
    } else if (q.id >= 36 && q.id <= 45) {
      targetTopic = 'HAVING';
      targetSubtopic = 'Core Group Filtering with HAVING';
    } else if (q.id >= 46 && q.id <= 50) {
      targetTopic = 'Sorting & Limiting';
      targetSubtopic = 'Basic ORDER BY & LIMIT';
    }

    return {
      ...q,
      topic: targetTopic,
      subtopic: targetSubtopic,
      part: targetTopic // maintain compatibility with UI headers if used
    };
  });

  console.log(`Loaded ${existing50Mapped.length} existing questions.`);

  // 3. Assemble all 300 questions
  const allRawQuestions = [
    ...existing50Mapped,
    ...TOPIC1_QUESTIONS,
    ...TOPIC2_QUESTIONS,
    ...TOPIC3_QUESTIONS,
    ...TOPIC4_QUESTIONS,
    ...TOPIC5_QUESTIONS,
    ...TOPIC6_QUESTIONS,
    ...TOPIC7_QUESTIONS,
    ...TOPIC8_QUESTIONS,
    ...TOPIC9_QUESTIONS,
    ...TOPIC10_QUESTIONS
  ];

  console.log(`Total assembled questions before sort: ${allRawQuestions.length}`);

  // Sort strictly by ID ascending (1 to 375)
  allRawQuestions.sort((a, b) => a.id - b.id);

  // 4. Validate and Execute Each Question
  const verifiedQuestions = [];
  const topicCounts = {};
  const seenIds = new Set();
  const seenTitles = new Set();
  let executionErrors = 0;

  for (const q of allRawQuestions) {
    // ID uniqueness
    if (seenIds.has(q.id)) {
      console.error(`Duplicate ID found: ${q.id}`);
      executionErrors++;
    }
    seenIds.add(q.id);

    // Title uniqueness check (warning or error)
    if (seenTitles.has(q.title.trim().toLowerCase())) {
      console.warn(`Duplicate title detected: "${q.title}" (ID ${q.id})`);
    }
    seenTitles.add(q.title.trim().toLowerCase());

    // Execute reference query against SQL.js
    try {
      const results = db.exec(q.expectedSql);
      if (!results || results.length === 0) {
        console.warn(`Query for Q${q.id} ("${q.title}") returned 0 result sets: ${q.expectedSql}`);
        q.expectedOutput = {
          columns: [],
          values: [],
          rowCount: 0
        };
      } else {
        const columns = results[0].columns;
        const values = results[0].values;
        q.expectedOutput = {
          columns,
          values,
          rowCount: values.length
        };
      }
    } catch (err) {
      console.error(`Execution ERROR in Q${q.id} ("${q.title}"):\n  SQL: ${q.expectedSql}\n  Error: ${err.message}`);
      executionErrors++;
    }

    // Ensure required fields
    if (!q.problemStatement || !q.hint || !q.expectedSql || !q.explanation) {
      console.error(`Missing required fields in Q${q.id}`);
      executionErrors++;
    }

    // Tally topic
    topicCounts[q.topic] = (topicCounts[q.topic] || 0) + 1;
    verifiedQuestions.push(q);
  }

  console.log('\n--- Topic Distribution Audit ---');
  let targetMismatch = false;
  for (const [topic, target] of Object.entries(EXPECTED_TOPIC_TARGETS)) {
    const actual = topicCounts[topic] || 0;
    const status = actual === target ? 'MATCH' : 'MISMATCH';
    console.log(`  ${topic.padEnd(22)}: ${String(actual).padStart(3)} / ${target} [${status}]`);
    if (actual !== target) targetMismatch = true;
  }

  console.log(`\nTotal verified questions: ${verifiedQuestions.length} / 375`);
  console.log(`Execution errors: ${executionErrors}`);

  if (executionErrors > 0 || targetMismatch || verifiedQuestions.length !== 375) {
    console.error('\nVerification failed! Please fix the errors listed above.');
    process.exit(1);
  }

  // 5. Generate src/data/questionBank.js
  const fileContent = `/**
 * Question Bank containing exactly 375 verified interview practice questions.
 * Preserves the original 50 questions (IDs 1–50), adds 250 curriculum questions
 * across 8 core topics, includes 50 Common Logic-Based SQL Interview Questions (IDs 301–350),
 * and features 25 dedicated CASE Expressions challenges (IDs 351–375),
 * all verified by live SQL execution against SQL.js.
 *
 * Generated automatically by scripts/buildAndVerifyQuestionBank.js
 */

import { DDL_DML_QUESTIONS, DDL_DML_TOPICS } from './ddlDmlQuestions.js';

export const QUESTION_TOPICS = [
  "SQL Fundamentals",
  "WHERE & Operators",
  "Sorting & Limiting",
  "Aggregate Functions",
  "GROUP BY",
  "HAVING",
  "SQL JOINs",
  "Subqueries",
  "CASE Expressions",
  "Interview Ready Questions",
  ...DDL_DML_TOPICS
];

const BASE_QUESTIONS = ${JSON.stringify(verifiedQuestions, null, 2)};

export const QUESTIONS = [
  ...BASE_QUESTIONS,
  ...DDL_DML_QUESTIONS
];
`;

  fs.writeFileSync(path.resolve('src/data/questionBank.js'), fileContent, 'utf8');
  console.log('\nSuccessfully wrote 375 verified questions to src/data/questionBank.js!');
}

buildAndVerify().catch(err => {
  console.error('Fatal error during build:', err);
  process.exit(1);
});
