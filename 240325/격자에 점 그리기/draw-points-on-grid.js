// 변수 선언 및 입력
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// n, m을 입력받습니다.
const n = Number(input[0].split(" ")[0]);
const m = Number(input[0].split(" ")[1]);

// 2차원 배열을 구현합니다.
let arr = Array(n + 1).fill(0).map(() => Array(n + 1).fill(0));

// m회에 걸쳐 점의 위치를 입력받고 올바른 위치에 1을 표기합니다.
for (let i = 1; i <= m; i++) {
    let [r, c] = input[i].split(" ").map(Number);
    arr[r][c] = i;
}

// 채워진 배열을 출력합니다.
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n; j++) {
        str += arr[i][j] + " ";
    }
    console.log(str);
}