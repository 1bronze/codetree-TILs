const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MAX = Number.MAX_SAFE_INTEGER;
const MAX_H = 100;

// 변수 선언 및 입력
const n = Number(input[0]);
const k = 17;
const arr = [];

for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}

let ans = INT_MAX;
// 크기가 K인 모든 구간을 잡아
// 해당 구간 안에 들어오게 언덕을 깎고
// 그 비용 중 최솟값을 계산합니다.
for (let i = 0; i < MAX_H; i++) {
    // 구간 [i, i + k]에서의 언덕을 깎는
    // 비용을 계산합니다.
    // i + k보다 높은 언덕은 높이가 i + k가 되게 깎으며
    // i보다 낮은 언덕은 높이가 i가 되게 쌓으면 됩니다.
    let cost = 0;
    for (let j = 0; j < n; j++) {
        if (arr[j] < i) {
            cost += (arr[j] - i) * (arr[j] - i);
        } else if (arr[j] > i + k) {
            cost += (arr[j] - i - k) * (arr[j] - i - k);
        }
    }

    ans = Math.min(ans, cost);
}

console.log(ans);