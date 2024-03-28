const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MAX = Number.MAX_SAFE_INTEGER;

// 변수 선언 및 입력:
const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);
let ans = INT_MAX;

arr.sort((a, b) => a - b);

// 정렬한 뒤 1번째 값과 n + 1번째 값, 2번째 값과 n + 2번째 값, ... n번째 값과 2n번째 값의
// 차이를 구합니다. 구한 값들의 최솟값을 찾습니다.
for (let i = 0; i < n; i++) {
    ans = Math.min(ans, arr[n + i] - arr[i]);
}

console.log(ans);