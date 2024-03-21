const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = input.slice(1).map(line => line.trim().split(' ').map(Number));

// 모든 쌍을 다 잡아봅니다.
let maxCnt = 0;
for (let i = 0; i < n; i++) {
    // 격자를 벗어나지 않을 범위로만 잡습니다.
    for (let j = 0; j < n - 2; j++) {
        const cnt = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
        maxCnt = Math.max(maxCnt, cnt);
    }
}

console.log(maxCnt);