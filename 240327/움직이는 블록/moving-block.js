const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const n = Number(input[0]);
const blocks = input.slice(1, n + 1).map(Number);

// 전체 블럭 수를 셉니다.
const sumOfBlocks = blocks.reduce((acc, cur) => acc + cur, 0);

// 평균 블럭 수 보다 더 큰 블럭에 대해서만
// 그 차이만큼 옮겨주면 됩니다.
const avg = Math.floor(sumOfBlocks / n);
let ans = 0;
blocks.forEach(blockNum => {
    if (blockNum > avg) {
        ans += blockNum - avg;
    }
});

console.log(ans);