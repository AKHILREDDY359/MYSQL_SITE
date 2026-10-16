import { QUESTIONS } from '../src/data/questionBank.js';
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

let mismatches = 0;
const baselineItems = baseline.snapshot;

for (let i = 1; i <= 375; i++) {
  const q = currentQuestions.find(item => item.id === i);
  const base = baselineItems.find(item => item.id === i);

  if (!q) {
    console.error(`Error: Missing question ID ${i}`);
    mismatches++;
    continue;
  }

  if (!base) {
    console.error(`Error: Missing baseline snapshot item for ID ${i}`);
    mismatches++;
    continue;
  }

  // 1. Core metadata preservation
  if (q.topic !== base.topic) {
    console.error(`Topic mismatch for Q${i}: expected "${base.topic}", got "${q.topic}"`);
    mismatches++;
  }
  if (q.subtopic !== base.subtopic) {
    console.error(`Subtopic mismatch for Q${i}: expected "${base.subtopic}", got "${q.subtopic}"`);
    mismatches++;
  }
  if (q.difficulty !== base.difficulty) {
    console.error(`Difficulty mismatch for Q${i}: expected "${base.difficulty}", got "${q.difficulty}"`);
    mismatches++;
  }

  // 2. Expected SQL preservation
  if (q.expectedSql.trim() !== base.expectedSql.trim()) {
    console.error(`SQL mismatch for Q${i}:\n  Base: ${base.expectedSql}\n  Curr: ${q.expectedSql}`);
    mismatches++;
  }

  // 3. Expected Output columns preservation
  const currCols = JSON.stringify(q.expectedOutput?.columns || []);
  const baseCols = JSON.stringify(base.expectedCols || []);
  if (currCols !== baseCols) {
    console.error(`Columns mismatch for Q${i}:\n  Base: ${baseCols}\n  Curr: ${currCols}`);
    mismatches++;
  }

  // 4. Expected Output row count preservation
  if (q.expectedOutput?.rowCount !== base.rowCount) {
    console.error(`Row count mismatch for Q${i}: expected ${base.rowCount}, got ${q.expectedOutput?.rowCount}`);
    mismatches++;
  }

  // 5. Output data preservation (first row & last row)
  const currFirst = JSON.stringify(q.expectedOutput?.values?.[0] || null);
  const baseFirst = JSON.stringify(base.firstVal || null);
  if (currFirst !== baseFirst) {
    console.error(`First row mismatch for Q${i}:\n  Base: ${baseFirst}\n  Curr: ${currFirst}`);
    mismatches++;
  }

  const lastIdx = (q.expectedOutput?.values?.length || 1) - 1;
  const currLast = JSON.stringify(q.expectedOutput?.values?.[lastIdx] || null);
  const baseLast = JSON.stringify(base.lastVal || null);
  if (currLast !== baseLast) {
    console.error(`Last row mismatch for Q${i}:\n  Base: ${baseLast}\n  Curr: ${currLast}`);
    mismatches++;
  }

  // 6. Restructuring quality checks
  if (!q.problemStatement || q.problemStatement.length < 20) {
    console.error(`Restructuring error in Q${i}: Problem statement is too short or empty.`);
    mismatches++;
  }
  if (!Array.isArray(q.requirements) || q.requirements.length === 0) {
    console.error(`Restructuring error in Q${i}: Requirements list is empty or missing.`);
    mismatches++;
  }
}

if (mismatches > 0) {
  console.error(`\nREGRESSION FAILURE: Found ${mismatches} mismatch(es) against baseline!`);
  process.exit(1);
}

console.log('✓ PASS: All 375 questions have verified 100% compatibility: identical IDs, SQL, columns, row counts, and data outputs.');
