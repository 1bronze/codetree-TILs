const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// 연속하여 같은 부호(양수 또는 음수)의 숫자가 나오는 횟수를 구해보며,
// 그 중 최댓값을 갱신합니다.
let ans = 0, cnt = 0;
for (let i = 0; i < n; i++) {
    // Case 1: 이전 숫자와 현재 숫자의 곱이 양수인 경우, 즉 같은 부호인 경우
    if (i >= 1 && arr[i] * arr[i - 1] > 0) {
        cnt += 1;
    }
    // Case 2: 그 외의 경우, 새로운 부호의 시작
    else {
        cnt = 1;
    }
    
    ans = Math.max(ans, cnt);
}

console.log(ans);