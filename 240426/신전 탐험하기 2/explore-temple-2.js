const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 각 층의 보물의 개수 정보를 입력받습니다.
const n = Number(input[0]);
const a = [0].concat(input.slice(1, 1 + n).map(line => [0].concat(line.split(' ').map(Number))));

// 동적 프로그래밍을 사용하여 최대 점수를 계산합니다.
const dp = Array.from(Array(1005), () => Array.from(Array(4), () => Array(4).fill(0)));

for(let j = 1; j <= 3; j++) {
    dp[1][j][j] = a[1][j];
}

for(let i = 1; i < n; i++) {
    for(let j = 1; j <= 3; j++) {
        for(let k = 1; k <= 3; k++) {
            for(let l = 1; l <= 3; l++) {
                if(k === l)
                    continue;
                dp[i + 1][j][l] = Math.max(dp[i + 1][j][l], dp[i][j][k] + a[i + 1][l]);
            }
        }
    }
}

// 최종적으로 가능한 최대 점수를 계산합니다.
let ans = 0;
for(let j = 1; j <= 3; j++) {
    for(let k = 1; k <= 3; k++) {
        if(j === k)
            continue;
        ans = Math.max(ans, dp[n][j][k]);
    }
}

// 계산된 최대 점수를 출력합니다.
console.log(ans);