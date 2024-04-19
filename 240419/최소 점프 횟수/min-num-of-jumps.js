const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const n = Number(input[0]);
const num = input[1].split(' ').map(Number);

let ans = Number.MAX_SAFE_INTEGER;

function findMin(idx, cnt) {
    // 마지막 위치를 넘었을 때
    // 그 중 최소 이동 횟수를 갱신합니다.
    if (idx >= n - 1) {
        ans = Math.min(ans, cnt);
        return;
    }
    
    for (let dist = 1; dist <= num[idx]; dist++) {
        findMin(idx + dist, cnt + 1);
    }
}

findMin(0, 0);

if (ans === Number.MAX_SAFE_INTEGER) {
    ans = -1;
}

console.log(ans);