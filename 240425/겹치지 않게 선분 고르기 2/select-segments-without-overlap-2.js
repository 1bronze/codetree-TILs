const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// dp[i] : x1 기준으로 정렬되어 있다는 가정 하에서
//         i번째 선분을 끝으로
//         겹치지 않게 선택할 수 있는 최대 선분의 수
const dp = Array(n).fill(0);

// x1 기준으로 오름차순 정렬을 진행합니다.
segments.sort((a, b) => a[0] - b[0]);

for (let i = 0; i < n; i++) {
    // 현재 선분이 시작 선분인 경우에는
    // dp값이 1이 되므로
    // 초기 셋팅은 1입니다.
    dp[i] = 1;

    // i번째 선분 선택 전에
    // 바로 선택한 선분을 j라 했을 때 
    // i, j 선분이 서로 겹치지 않는 경우 중 
    // 선택 할 수 있는 선분의 최대 개수를 계산합니다.
    for(let j = 0; j < i; j++) {
        const x1I = segments[i][0];
        const x2J = segments[j][1];

        // 이미 x1 순으로 정렬이 되어있기에
        // x2[j] < x1[i]이기만 하면 두 선분은 겹치지 않습니다.
        if(x2J < x1I)
            dp[i] = Math.max(dp[i], dp[j] + 1);
    }
}

// 마지막으로 선택한 선분 위치가 i일 때의 경우 중
// 고를 수 있는 선분의 수가 가장 큰 경우를 고릅니다.
let ans = 0;
for (let i = 0; i < n; i++) {
    ans = Math.max(ans, dp[i]);
}

console.log(ans);