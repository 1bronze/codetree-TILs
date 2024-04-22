const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MAX = Number.MAX_SAFE_INTEGER;

// 변수 선언 및 입력
const n = Number(input[0]);
const num = input[1].split(' ').map(Number);
const visited = Array(2 * n).fill(false);

let ans = INT_MAX;

function calc() {
    let diff = 0;
    for (let i = 0; i < 2 * n; i++) {
        diff = visited[i] ? (diff + num[i]) : (diff - num[i]);
    }
    
    return Math.abs(diff);
}

function findMin(idx, cnt) {
    if (cnt === n) {
        ans = Math.min(ans, calc());
        return;
    }
    
    if (idx === 2 * n) {
        return;
    }
    
    // 현재 숫자를 첫 번째 그룹에 사용한 경우입니다.
    visited[idx] = true;
    findMin(idx + 1, cnt + 1);
    visited[idx] = false;
    
    // 현재 숫자를 두 번째 그룹에 사용한 경우입니다.
    findMin(idx + 1, cnt);
}

findMin(0, 0);
console.log(ans);