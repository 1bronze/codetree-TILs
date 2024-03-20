const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

// 변수 선언 및 입력
const n = Number(input[0]);
const students = [];

for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(" ").map(Number);
    students.push([height, weight, i]);
}

// Custom Comparator를 활용한 정렬
students.sort((a, b) => b[0] - a[0] || b[1] - a[1] || a[2] - b[2]);

// 출력
for (let student of students) {
    console.log(`${student.height} ${student.weight} ${student.number}`);
}