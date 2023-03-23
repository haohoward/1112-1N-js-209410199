import { students, sdata } from './data_99.js';

console.log('students origian', students);
console.log('sdata origian', sdata);

const students2 = students.map((student) => {
  return { ...student, role: 'student' };
});

console.log('3', students2);

sdata.sort(function (a, b) {
  return b - a;
});
console.log('2',sdata);
console.log(`the hightest ${sdata[0]}`);
console.log(`the lowtest ${sdata[sdata.length-1]}`);

students2.sort(function (a, b) {
  return b.score - a.score;
});
console.log('students2 sort',students);

const averageStudent =
  students.reduce((total, student, index) => {
    console.log('index total', index, total);
    return total + student.score;
  }, 0) / students.length;

console.log('average', averageStudent);

const averageSdata =
  sdata.reduce((total, data, index) => {
    console.log('index total', index, total);
    return total + data;
  }, 0) / sdata.length;

  console.log('averageSdata', averageSdata);