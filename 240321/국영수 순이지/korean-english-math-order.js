const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const students = [];
for (let i = 1; i <= n; i++) {
    let [name, korean, english, math] = input[i].split(' ');
    students.push([name, Number(korean), Number(english), Number(math)]);
}

// Custom Comparator를 활용한 정렬
students.sort((a, b) => {
    if (a[1] !== b[1]) return b[1] - a[1]; // 국어점수 내림차순
    if (a[2] !== b[2]) return b[2] - a[2]; // 영어점수 내림차순
    return b[3] - a[3]; // 수학점수 내림차순
});

// 출력
students.forEach(student => {
    console.log(`${student[0]} ${student[1]} ${student[2]} ${student[3]}`);
});