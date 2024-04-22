const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MAX = Number.MAX_SAFE_INTEGER;

// 변수 선언 및 입력
const n = Number(input[0]);
const num = input[1].split(' ').map(Number);

let ans = INT_MAX;

function findMin(idx, cnt, diff) {
    if (idx === 2 * n) {
        if (cnt === n) {
            ans = Math.min(ans, Math.abs(diff));
        }
        return;
    }
    
    // 현재 숫자를 첫 번째 그룹에 사용한 경우입니다.
    findMin(idx + 1, cnt + 1, diff + num[idx]);
    // 현재 숫자를 두 번째 그룹에 사용한 경우입니다.  
    findMin(idx + 1, cnt, diff - num[idx]);
}

findMin(0, 0, 0);
console.log(ans);