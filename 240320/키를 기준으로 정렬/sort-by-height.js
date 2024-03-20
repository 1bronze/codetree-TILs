class Student {
  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const students = [];
for (let i = 1; i <= n; i++) {
  const [name, height, weight] = input[i].split(' ');
  students.push(new Student(name, Number(height), Number(weight)));
}

// Custom Comparator를 활용한 정렬
students.sort((a, b) => a.height - b.height);

// 출력
for (let student of students) {
  console.log(`${student.name} ${student.height} ${student.weight}`);
}