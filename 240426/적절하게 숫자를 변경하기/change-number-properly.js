const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MAX_K = 4;
const INT_MIN = Number.MIN_SAFE_INTEGER;

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const a = [0].concat(input[1].split(' ').map(Number));

// dp[i][j] :
// 마지막으로 놓은 블록의 끝 위치가 i이고
// 지금까지 놓은 블록의 수가 j개일 때
// 얻을 수 있는 최대 유사도
const dp = Array.from(Array(n + 1), () => Array(m + 2).fill(0));

// [start_index, end_index] 구간에 전부 k로 채웠진 블록을 하나 넣었을 때
// 얻을 수 있는 유사도 값을 계산해 반환합니다.
function similarity(startIndex, endIndex, k) {
    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        if (a[i] === k) {
            sum++;
        }
    }
    return sum;
}

function initialize() {
    // 최댓값을 구하는 문제이므로, 
    // 초기에는 전부 INT_MIN을 넣어줍니다.
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= m + 1; j++) {
            dp[i][j] = INT_MIN;
        }
    }
    // 처음에는 블록이 하나도 없기 때문에
    // 위치 0까지 고려했을 때, 0개의 블록을 놓은 상황에서
    // 초기 유사도 값은 0 입니다. 
    dp[0][0] = 0;
}

initialize();

for (let i = 1; i <= n; i++) {
    // 정확히 i번째 숫자를 마지막으로
    // 그 동안 블록을 총 j개 사용했을 때
    // 얻을 수 있는 최대 유사도를 계산합니다.

    // 가장 마지막으로 놓은 블록의 위치를 [l, i]라 했을 때
    // 해당 구간에 전부 k로 채웠진 블록을 사용한 경우를 고려해봅니다.
    for (let j = 1; j <= m + 1; j++) {
        for (let l = 1; l <= i; l++) {
            for (let k = 1; k <= MAX_K; k++) {
                // [l, i] 구간에 전부 k로 채워진 블록을 하나 추가한 경우입니다.
                // 지금까지의 사용한 블록의 수가 j가 되기 위해서는
                // l - 1번째까지 사용한 블록의 수가 j - 1이어야 하므로
                // dp[l - 1][j - 1]에 
                // [l, i] 구간에 전부 k로 채웠진 블록을 하나 추가했을 때 
                // 얻을 수 있는 유사도를 더한 값을 비교해볼 수 있습니다.
                dp[i][j] = Math.max(dp[i][j], dp[l - 1][j - 1] + similarity(l, i, k));
            }
        }
    }
}

// n개의 숫자에 대해 전부 고려했을 때,
// 사용한 블록의 수가 m + 1을 넘지 않는 경우 중
// 가장 높은 유사도를 얻을 수 있는 경우를 선택합니다.
let ans = 0;
for(let j = 1; j <= m + 1; j++)
    ans = Math.max(ans, dp[n][j]);

console.log(ans);