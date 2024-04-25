const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const UNUSED = -1;
const MAX_ANS = 10001;

const [n, m] = input[0].split(' ').map(Number);
const coin = [0].concat(input[1].split(' ').map(Number));

let memo = Array(m + 1).fill(UNUSED);

// sum에서부터 시작하여 최종적으로 합 m을 만드는 데
// 필요한 최소 동전의 수를 반환하는 재귀입니다.
const findMinCnt = (sum) => {
    // 미리 계산된 적이 있는 경우 해당 값을 사용해줍니다.
    if (memo[sum] !== UNUSED) {
        return memo[sum];
    }

    // 합이 m이 되면 동전이 추가적으로 필요 없으므로
    // 필요한 동전의 수 0을 반환 합니다.
    if (sum === m) {
        memo[sum] = 0;
        return 0;
    }
    
    // 최소를 구하는 문제이므로
    // 초기값을 답이 될 수 있는 최대보다 조금 더 큰
    // MAX_ANS로 설정합니다.
    let minCnt = MAX_ANS;
    
    // 동전들을 하나씩 사용해봅니다.
    for (let i = 1; i <= n; i++) {
        if (sum + coin[i] <= m) {
            minCnt = Math.min(minCnt, findMinCnt(sum + coin[i]) + 1);
        }
    }
    
    memo[sum] = minCnt;
    return minCnt;
};

// 합 0에서부터 시작하여 합 m을 만들기 위해 필요한
// 최소 동전의 수를 계산합니다.
let minCnt = findMinCnt(0);

// 거슬러주는 것이 불가능할 시, -1을 출력합니다.
if (minCnt === MAX_ANS) {
    minCnt = -1;
}

console.log(minCnt);