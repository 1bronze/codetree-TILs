const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 입력
const n = Number(input[0]);
const x1 = [];
const x2 = [];
for (let i = 1; i <= n; i++) {
    const [x1Val, x2Val] = input[i].split(' ').map(Number);
    x1.push(x1Val);
    x2.push(x2Val);
}

let ans = Number.MAX_SAFE_INTEGER;

// 모든 선분을 하나씩 지워보며 답을 찾습니다.
for (let skip = 0; skip < n; skip++) {
    let maxX2 = 0;
    let minX1 = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (i === skip) continue;
        // 시작점 중 가장 앞에 있는 좌표와 끝점 중 가장 뒤에 있는 점의 좌표를 확인합니다.
        maxX2 = Math.max(maxX2, x2[i]);
        minX1 = Math.min(minX1, x1[i]);
    }
    // 조건을 만족하는 선분의 길이는 maxX2 - minX1입니다.
    // 정답보다 이 선분의 길이가 작으면 업데이트합니다.
    ans = Math.min(ans, maxX2 - minX1);
}

console.log(ans);