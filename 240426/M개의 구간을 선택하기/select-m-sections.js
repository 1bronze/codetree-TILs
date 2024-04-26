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
    return prefixSum[endIdx] - prefixSum[startIdx] + a[startIdx];
}

function initialize() {
    // 최댓값을 구하는 문제이므로, 
    // 초기에는 전부
    // 답이 될 수 있는 최솟값인 MIN_ANS 넣어줍니다.
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
    // 그때까지의 합은 sumInRange(l, i)가 되므로 
    // dp[i][1]값은 1 <= l <= i를 만족하는 l에 대해
    // sumInRange(l, i) 값들 중 최댓값이 되어야 합니다.
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
        // 1부터 l - 2 사이의 k 중에 dp[k][j - 1]값이 
        // 가장 큰 경우의 k값을 기록합니다.
        // 처음에는 1번째 위치가 유일하게 가능한 위치 입니다.
        let maxK = 1;
        
        // j번째로 정한 구간이 [l, i] 인 경우를 고려합니다. 
        // k = 1인 경우가 가능하기 위한 최소 l이 3 이므로
        // 3부터 시작합니다.
        for (let l = 3; l <= i; l++) {
            // j - 1번째로 정한 구간이 정확히 k번째에서 끝난 경우에 대해
            // 값을 갱신합니다.
            dp[i][j] = Math.max(dp[i][j], dp[maxK][j - 1] + sumInRange(l, i));
            
            // 현재 [1, l - 2] 사이 중 최대의 k가
            // 기록되어 있으므로, l - 1 번째 위치만 추가적으로
            // 더 고려하여 maxK가 더 큰 값을 갖는 위치를 가리키도록 합니다.
            if (dp[l - 1][j - 1] > dp[maxK][j - 1]) {
                maxK = l - 1;
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