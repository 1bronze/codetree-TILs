const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// 인접하지 않은 모든 쌍을 다 잡아봅니다.
let ans = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    for (let j = i + 2; j < n; j++) {
        if (ans < arr[i] + arr[j]) {
            ans = arr[i] + arr[j];
        }
    }
}

console.log(ans);