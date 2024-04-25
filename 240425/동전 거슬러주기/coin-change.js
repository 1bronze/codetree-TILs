const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const coin = [0].concat(input[1].split(' ').map(Number));

// 최소를 구하는 문제이므로
// 초기값을 Number.MAX_SAFE_INTEGER로 설정합니다.
let minCnt = Number.MAX_SAFE_INTEGER;

// 지금까지 cnt개의 동전을 사용하여
// 합을 sum 만들었을 때, 최종적으로 합 m을
// 만들기 위해 탐색을 더 진행하는 재귀입니다.
const findMinCnt = (sum, cnt) => {
    // 합이 m이 되면 최소 동전의 수를 갱신해줍니다.
    if (sum === m) {
        minCnt = Math.min(minCnt, cnt);
        return;
    }

    // 동전들을 추가적으로 한 번씩 더 사용해봅니다.
    for (let i = 1; i <= n; i++) {
        if (sum + coin[i] <= m) {
            findMinCnt(sum + coin[i], cnt + 1);
        }
    }
};

// 0개의 동전을 사용하여, 합 0을 만들었을 경우를
// 초기 상태로 설정하여 재귀를 호출합니다.
findMinCnt(0, 0);

// 거슬러주는 것이 불가능할 시, -1을 출력합니다.
if (minCnt === Number.MAX_SAFE_INTEGER) {
    minCnt = -1;
}

console.log(minCnt);