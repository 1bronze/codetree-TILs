const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MAX = Number.MAX_SAFE_INTEGER;
const MAX_K = 10000;

// 변수 선언 및 입력
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

function getCost(low, high) {
    let cost = 0;
    // 각 수에 대해 low ~ high 사이로 바꾸는데 드는 cost를 계산해 줍니다.
    arr.forEach(elem => {
        // low보다 작은 경우 low로 만들어 주는 게 최소 cost입니다.
        if (elem < low) {
            cost += low - elem;
        }
        // high보다 큰 경우 high로 만들어 주는게 최소 cost입니다.
        if (elem > high) {
            cost += elem - high;
        }
        // 그 외의 경우 이미 구간 안에 있기 때문에 cost가 필요하지 않습니다.
    });

    return cost;
}

let ans = INT_MAX;
// 모든 구간 쌍 (num, num + k)를 잡아보며
// 그 구간으로 만들기 위한 비용을 계산하여
// 그 중 최솟값을 계산합니다.
for (let num = 1; num <= MAX_K; num++) {
    ans = Math.min(ans, getCost(num, num + k));
}

console.log(ans);