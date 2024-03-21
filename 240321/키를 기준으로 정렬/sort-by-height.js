const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const students = [];
for (let i = 1; i <= n; i++) {
    let [name, height, weight] = input[i].split(' ');
    students.push([name, Number(height), Number(weight)]);
}

// Custom Comparator를 활용한 정렬
students.sort((a, b) => a[1] - b[1]);

// 출력
students.forEach(student => {
    console.log(`${student[0]} ${student[1]} ${student[2]}`);
});