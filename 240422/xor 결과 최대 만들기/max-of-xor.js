const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);
const visited = new Array(n).fill(false);

let ans = 0;

function calc() {
    let val = 0;
    for(let i = 0; i < n; i++) {
        if(visited[i]) {
            val ^= a[i];
        }
    }
    
    return val;
}

function findMaxXor(currIdx, cnt) {
    if(cnt === m) {
        // 선택된 모든 조합에 대해 xor 연산을 적용해봅니다.
        ans = Math.max(ans, calc());
        return;
    }
    
    if(currIdx === n) {
        return;
    }
    
    // currIdx index에 있는 숫자를 선택하지 않은 경우
    findMaxXor(currIdx + 1, cnt);
    
    // currIdx index에 있는 숫자를 선택한 경우
    visited[currIdx] = true;
    findMaxXor(currIdx + 1, cnt + 1);
    visited[currIdx] = false;
}

findMaxXor(0, 0);

console.log(ans);