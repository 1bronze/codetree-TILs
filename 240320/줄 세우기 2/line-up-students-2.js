const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// 학생들의 정보를 나타내는 클래스 선언
class Student {
  constructor(height, weight, number) {
    this.height = height;
    this.weight = weight;
    this.number = number;
  }
}

const students = [];
for (let i = 1; i <= n; i++) {
  const [height, weight] = input[i].split(' ').map(Number);
  students.push(new Student(height, weight, i));
}

// custom comparator를 활용한 정렬
// 키 오름차순, 몸무게 내림차순 순으로 정렬합니다.
students.sort((a, b) => {
  if (a.height === b.height) {
    return b.weight - a.weight; // 몸무게 내림차순
  }
  return a.height - b.height; // 키 오름차순
});

// 결과를 출력합니다.
for (let student of students) {
  console.log(student.height, student.weight, student.number);
}