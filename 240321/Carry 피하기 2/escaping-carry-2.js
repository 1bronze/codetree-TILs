const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// 모든 쌍을 다 잡아봅니다.
let ans = -1;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            let carry = false;

            // 일의 자리에서 carry가 발생하는 경우
            if (arr[i] % 10 + arr[j] % 10 + arr[k] % 10 >= 10) {
                carry = true;
            }

            // 십의 자리에서 carry가 발생하는 경우
            if (Math.floor(arr[i] % 100 / 10) + Math.floor(arr[j] % 100 / 10) + Math.floor(arr[k] % 100 / 10) >= 10) {
                carry = true;
            }

            // 백의 자리에서 carry가 발생하는 경우
            if (Math.floor(arr[i] % 1000 / 100) + Math.floor(arr[j] % 1000 / 100) + Math.floor(arr[k] % 1000 / 100) >= 10) {
                carry = true;
            }

            // 천의 자리에서 carry가 발생하는 경우
            if (Math.floor(arr[i] % 10000 / 1000) + Math.floor(arr[j] % 10000 / 1000) + Math.floor(arr[k] % 10000 / 1000) >= 10) {
                carry = true;
            }

            if (!carry) {
                ans = Math.max(ans, arr[i] + arr[j] + arr[k]);
            }
        }
    }
}

console.log(ans);