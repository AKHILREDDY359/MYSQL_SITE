import { QUESTIONS } from '../src/data/questionBank.js';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const snapshotPath = path.join(__dirname, 'baseline_375_snapshot.json');
if (!fs.existsSync(snapshotPath)) {
  console.error('Error: baseline snapshot not found at', snapshotPath);
  process.exit(1);
}

const baseline = JSON.parse(fs.readFileSync(snapshotPath, 'utf-8'));
const currentQuestions = QUESTIONS.filter(q => q.id >= 1 && q.id <= 375);

if (currentQuestions.length !== 375) {
  console.error(`Error: Expected exactly 375 baseline questions, found ${currentQuestions.length}`);
  process.exit(1);
}

const currentSnapshot = currentQuestions.map(q => ({
  id: q.id,
  topic: q.topic,
  subtopic: q.subtopic,
  difficulty: q.difficulty,
  title: q.title,
  problemStatement: q.problemStatement,
  expectedSql: q.expectedSql,
  expectedCols: q.expectedOutput?.columns,
  rowCount: q.expectedOutput?.rowCount,
  firstVal: q.expectedOutput?.values?.[0],
  lastVal: q.expectedOutput?.values?.[q.expectedOutput?.values?.length - 1]
}));

const currentHash = crypto.createHash('sha256').update(JSON.stringify(currentSnapshot)).digest('hex');

if (currentHash !== baseline.hash) {
  console.error('REGRESSION FAILURE: Questions 1-375 do not match baseline cryptographic hash!');
  console.error('Expected hash:', baseline.hash);
  console.error('Current hash: ', currentHash);
  process.exit(1);
}

console.log('✓ PASS: All original 375 questions are 100% intact and unaltered.');
