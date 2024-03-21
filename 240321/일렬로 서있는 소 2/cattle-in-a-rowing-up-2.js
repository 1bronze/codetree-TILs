const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// 모든 쌍을 다 잡아봅니다.
let cnt = 0;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            if (arr[i] <= arr[j] && arr[j] <= arr[k]) {
                cnt += 1;
            }
        }
    }
}

console.log(cnt);