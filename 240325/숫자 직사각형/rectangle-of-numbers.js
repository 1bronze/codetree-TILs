// 변수 선언 및 입력
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const n = Number(input[0]);
const m = Number(input[1]);

// 2차원 배열을 구현합니다.
let arr2d = Array(n).fill(0).map(() => Array(m).fill(0));

// n * m 크기의 배열에 숫자를 채워 넣습니다.
let cnt = 1;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        arr2d[i][j] = cnt++;
    }
}

// 숫자 직사각형을 출력합니다.
for (let row of arr2d) {
    let str = "";
    for (let elem of row) {
        str += elem + " ";
    }
    console.log(str);
}