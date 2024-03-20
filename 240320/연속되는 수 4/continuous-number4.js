const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// 연속하여 증가하는 구간의 길이를 구해보며,
// 그 중 최댓값을 갱신합니다.
let ans = 0, cnt = 0;
for (let i = 0; i < n; i++) {
    // Case 1: 이전 숫자보다 현재 숫자가 큰 경우, 증가 구간이므로 카운트를 증가시킵니다.
    if (i >= 1 && arr[i] > arr[i - 1]) {
        cnt += 1;
    }
    // Case 2: 그 외의 경우, 새로운 구간의 시작이므로 카운트를 1로 리셋합니다.
    else {
        cnt = 1;
    }
    
    ans = Math.max(ans, cnt); // 최댓값 갱신
}

console.log(ans);