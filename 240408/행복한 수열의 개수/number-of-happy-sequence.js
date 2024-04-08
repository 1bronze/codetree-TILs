const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
let seq = Array(n).fill(0);

function isHappySequence() {
    // 주어진 seq가 행복한 수열인지 판단하는 함수입니다.
    let consecutiveCount = 1, maxCcnt = 1;
    for (let i = 1; i < n; i++) {
        if (seq[i - 1] === seq[i]) {
            consecutiveCount += 1;
        } else {
            consecutiveCount = 1;
        }
        
        maxCcnt = Math.max(maxCcnt, consecutiveCount);
    }
    
    // 최대로 연속한 회수가 m이상이면 true를 반환합니다.
    return maxCcnt >= m;
}


let numHappy = 0;

// 먼저 가로로 행복한 수열의 수를 셉니다.
for (let i = 0; i < n; i++) {
    seq = grid[i].slice();

    if (isHappySequence()) {
        numHappy += 1;
    }
}

// 세로로 행복한 수열의 수를 셉니다.
for (let j = 0; j < n; j++) {
    // 세로로 숫자들을 모아 새로운 수열을 만듭니다.
    for (let i = 0; i < n; i++) {
        seq[i] = grid[i][j];
    }

    if (isHappySequence()) {
        numHappy += 1;
    }
}

console.log(numHappy);