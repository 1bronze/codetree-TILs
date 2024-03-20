class Student {
  constructor(height, weight, number) {
    this.height = height;
    this.weight = weight;
    this.number = number;
  }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const students = [];
for (let i = 1; i <= n; i++) {
  const [height, weight] = input[i].split(' ').map(Number);
  students.push(new Student(height, weight, i + 1));
}

// Custom Comparator를 활용한 정렬
students.sort((a, b) => {
  if (a.height !== b.height) return b.height - a.height;
  if (a.weight !== b.weight) return b.weight - a.weight;
  return a.number - b.number;
});

// 출력
students.forEach(student => {
  console.log(`${student.height} ${student.weight} ${student.number}`);
});