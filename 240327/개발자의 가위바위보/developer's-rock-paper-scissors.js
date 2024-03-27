const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = input.slice(1).map((v) => v.split(" ").map(Number));

let maxWin = 0;

// Case 1. 1이 2를 이기고, 2가 3을 이기고 3이 1을 이기는 경우
let win = 0;
for (let i = 0; i < n; i++) {
    const [a, b] = arr[i];
    if (a === 1 && b === 2) {
        win += 1;
    } else if (a === 2 && b === 3) {
        win += 1;
    } else if (a === 3 && b === 1) {
        win += 1;
    }
}

maxWin = Math.max(maxWin, win);

// Case 2. 1이 3을 이기고, 3이 2를 이기고 2가 1을 이기는 경우
win = 0;
for (let i = 0; i < n; i++) {
    const [a, b] = arr[i];
    if (a === 1 && b === 3) {
        win += 1;
    } else if (a === 3 && b === 2) {
        win += 1;
    } else if (a === 2 && b === 1) {
        win += 1;
    }
}

maxWin = Math.max(maxWin, win);

console.log(maxWin);