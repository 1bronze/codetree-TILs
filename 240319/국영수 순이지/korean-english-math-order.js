const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = parseInt(input.shift()); // 첫 번째 입력값을 n으로 할당 후 배열에서 제거
let students = [];
for (let i = 0; i < n; i++) {
    let [name, korean, english, math] = input[i].split(' ');
    students.push([name, parseInt(korean), parseInt(english), parseInt(math)]);
}

// Custom Comparator를 활용한 정렬
students.sort((a, b) => {
    if (a[1] !== b[1]) return b[1] - a[1];
    if (a[2] !== b[2]) return b[2] - a[2];
    return b[3] - a[3];
});

// 출력
for (let i = 0; i < students.length; i++) {
    console.log(`${students[i][0]} ${students[i][1]} ${students[i][2]} ${students[i][3]}`);
}