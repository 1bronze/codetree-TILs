const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

// 변수 선언 및 입력:
const [n, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// 연속하여 t보다 큰 숫자가 나오는 횟수를 구해보며,
// 그 중 최댓값을 갱신합니다.
let ans = 0, cnt = 0;
for (let i = 0; i < n; i++) {
    // Case 1
    if (arr[i] > t) {
        cnt += 1;
    }
    // Case 2
    else {
        cnt = 0;
    }
    
    ans = Math.max(ans, cnt);
}

console.log(ans);