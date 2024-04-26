const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MIN_ANS = -500000;

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const a = [0].concat(input[1].split(' ').map(Number));

// dp[i][j] : 정확히 i번째 위치를 마지막으로,
//            j개의 구간을 선택했을 때,
//            얻을 수 있는 합의 최대
const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

// prefixSum[i] : 1번째부터 i번째까지 
//                 a배열 원소의 합을 저장하고 있습니다.
const prefixSum = Array(n + 1).fill(0);

// 누적합 배열에 적절한 값을 채워줍니다.
function preprocess() {
    prefixSum[1] = a[1];
    
    for (let i = 2; i <= n; i++) {
        prefixSum[i] = prefixSum[i - 1] + a[i];
    }
}

// 배열 a의 startIdx번째 원소부터 endIdx번째 원소까지의 합을 반환합니다.
function sumInRange(startIdx, endIdx) {
    return prefixSum[endIdx] - prefixSum[startIdx - 1];
}


function initialize() {
    // 최댓값을 구하는 문제이므로, 
    // 초기에는 전부 
    // 답이 될 수 있는 최솟값인 MIN_ANS를 넣어줍니다.
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            dp[i][j] = MIN_ANS;
        }
    }
    
    // 첫 번째 구간을 선택하는 것을
    // 초기 조건으로 설정합니다.
    // 첫 번째 구간을 [l, i] 로 설정한다면, 
    // 정확히 i번째 위치를 마지막으로 
    // 1개의 구간을 선택하게 되고
    // 그때까지의 합은 Sum(l, i)가 되므로 
    // dp[i][1]값은 1 <= l <= i를 만족하는 l에 대해
    // Sum(l, i) 값들 중 최댓값이 되어야 합니다.
    for (let i = 1; i <= n; i++) {
        for (let l = 1; l <= i; l++) {
            dp[i][1] = Math.max(dp[i][1], sumInRange(l, i));
        }
    }
}

preprocess();

initialize();

// 정확히 i번째 위치를 마지막으로, 
// j개의 구간을 선택했을 때, 
// 얻을 수 있는 최대 합을 계산합니다.
for (let i = 1; i <= n; i++) {
    for (let j = 2; j <= m; j++) {
        // j번째로 정한 구간이 [l, i]로 설정되는 경우를 고려합니다.
        for (let l = 1; l <= i; l++) {
            // j - 1번째로 정한 구간이 정확히 k번째에서 끝난 경우에 대해 
            // 전부 조사하여 그 중 합이 가장 큰 경우를 계산합니다.
            // 단, 구간끼리는 인접할 수 없다고 했으므로 
            // 가능한 k의 범위는 1에서 l - 2 사이입니다.
            for (let k = 1; k <= l - 2; k++) {
                dp[i][j] = Math.max(dp[i][j], dp[k][j - 1] + sumInRange(l, i));
            }
        }
    }
}

// 정확히 m개의 구간을 선택해야 하므로
// i번째 위치를 마지막으로 총 m개의 구간을 고른 경우에 대해
// 전부 조사하여 그 중 합이 가장 큰 경우를 선택합니다.
let ans = MIN_ANS;
for (let i = 1; i <= n; i++)
    ans = Math.max(ans, dp[i][m]);

console.log(ans);