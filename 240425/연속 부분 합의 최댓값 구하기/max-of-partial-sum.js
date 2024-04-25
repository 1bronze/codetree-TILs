const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MIN = Number.MIN_SAFE_INTEGER;

// 변수 선언 및 입력
const n = Number(input[0]);
const a = [0].concat(input[1].trim().split(' ').map(Number));

// dp[i] : 선택한 연속 부분 수열의 마지막 원소의 위치가 i라 했을 때,
//         얻을 수 있는 최대 합
const dp = new Array(n + 1).fill(0);

function initialize() {
    // 최댓값을 구하는 문제이므로, 
    // 초기에는 전부 INT_MIN을 넣어줍니다.
    for (let i = 1; i <= n; i++) {
        dp[i] = INT_MIN;
    }
    
    // 첫 번째 원소를 연속 부분 수열의 원소로 사용하는 경우를 
    // 초기 조건으로 설정합니다.
    // 이때는, 이 원소만 연속 부분 수열에 속하게 되므로 
    // dp[1] = a[1]이 됩니다.
    dp[1] = a[1];
}

initialize();

// 선택한 연속 부분 수열의 마지막 원소의 위치가 i라 했을 때, 
// 얻을 수 있는 최대 합을 계산합니다.
for (let i = 2; i <= n; i++) {
    // 이렇 상황을 만들기 위한 선택지는 크게 2가지 입니다.
    
    // Case 1
    // 그 이전 연속 부분 수열에 i번째 원소를 
    // 더 추가하는 경우입니다.
    // 추가를 위해서는 정확히 i - 1번째로 끝나는 연속 부분 수열 
    // 중 최대 합이 필요하므로, dp[i - 1] + a[i]가 
    // 하나의 선택지가 됩니다.
    
    // Case 2
    // i 번째 원소부터 연속 부분 수열을 만들기 시작하는 경우입니다.
    // 이 경우에는 원소가 a[i] 하나 뿐이므로, a[i]가 
    // 또 다른 선택지가 됩니다.
    dp[i] = Math.max(dp[i - 1] + a[i], a[i]);
}

let ans = INT_MIN;
for (let i = 1; i <= n; i++)
    ans = Math.max(ans, dp[i]);

console.log(ans);