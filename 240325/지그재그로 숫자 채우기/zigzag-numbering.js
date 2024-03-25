// 변수 선언 및 입력
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const n = Number(input[0]);
const m = Number(input[1]);

// Step 1:
let answer = Array(n).fill(0).map(() => Array(m).fill(0));
let count = 0;
for (let col = 0; col < m; col++) {
    if (col % 2 === 0) {
        // Case 1:
        for (let row = 0; row < n; row++) {
            answer[row][col] = count;
            count++;
        }
    } else {
        // Case 2:
        for (let row = n - 1; row >= 0; row--) {
            answer[row][col] = count;
            count++;
        }
    }
}

// 출력:
for (let row of answer) {
    let str = "";
    for (let elem of row) {
        str += elem + " ";
    }
    console.log(str);
}