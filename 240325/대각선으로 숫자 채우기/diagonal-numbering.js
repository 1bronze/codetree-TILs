// 변수 선언 및 입력
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const n = Number(input[0]);
const m = Number(input[1]);

// Step 1:
let answer = Array.from(Array(n), () => Array(m).fill(0));
let count = 1;
for (let startCol = 0; startCol < m; startCol++) {
    let currRow = 0;
    let currCol = startCol;

    while (currCol >= 0 && currRow < n) {
        answer[currRow][currCol] = count;

        // 변수 업데이트 :
        currRow++;
        currCol--;
        count++;
    }
}

// Step 2:
for (let startRow = 1; startRow < n; startRow++) {
    let currRow = startRow;
    let currCol = m - 1;

    while (currCol >= 0 && currRow < n) {
        answer[currRow][currCol] = count;

        // 변수 업데이트 :
        currRow++;
        currCol--;
        count++;
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