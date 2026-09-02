import * as fs from 'fs';
import * as path from 'path';

export type Gradebook = {
  [student: string]: {
    [subject: string]: number;
  };
};

export function calculateSubjectAverage(subject: string): number {
  const filePath = path.resolve(process.cwd(), 'data/gradebook.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const gradebook: Gradebook = JSON.parse(fileContent);

  let totalScore = 0;
  let studentCount = 0;

  for (const student of Object.values(gradebook)) {
    if (subject in student) {
      totalScore += student[subject];
      studentCount += 1;
    }
  }
  

  return studentCount === 0 ? 0 : totalScore / studentCount;
}