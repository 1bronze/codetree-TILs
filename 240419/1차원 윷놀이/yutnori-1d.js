const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m, k] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);
const pieces = Array(k).fill(1);

let ans = 0;

// 점수를 계산합니다.
function calc() {
    let score = 0;
    for (const piece of pieces) {
        // 조건이 true이면 1을 더하고, false이면 0을 더합니다.
        score += piece >= m ? 1 : 0;
    }
    
    return score;
}

function findMax(cnt) {
    // 말을 직접 n번 움직이지 않아도
    // 최대가 될 수 있으므로 항상 답을 갱신합니다.
    ans = Math.max(ans, calc());
    
    // 더 이상 움직일 수 없으면 종료합니다.
    if (cnt === n) {
        return;
    }
    
    for (let i = 0; i < k; i++) {
        // 움직여서 더 이득이 되지 않는
        // 말은 더 이상 움직이지 않습니다.
        if (pieces[i] >= m) {
            continue;
        }
        
        pieces[i] += nums[cnt];
        findMax(cnt + 1);
        pieces[i] -= nums[cnt];
    }
}

findMax(0);
console.log(ans);