class Student {
  constructor(name, korean, english, math) {
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.math = math;
  }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input.shift());
const students = [];
for (let i = 0; i < n; i++) {
  let [name, korean, english, math] = input[i].split(' ');
  students.push(new Student(name, Number(korean), Number(english), Number(math)));
}

// Custom Comparator를 활용한 정렬
students.sort((a, b) => {
  if (a.korean !== b.korean) return b.korean - a.korean;
  if (a.english !== b.english) return b.english - a.english;
  return b.math - a.math;
});

// 출력
for (let student of students) {
  console.log(`${student.name} ${student.korean} ${student.english} ${student.math}`);
}