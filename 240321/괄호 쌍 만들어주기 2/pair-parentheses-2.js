const fs = require('fs');

// 변수 선언 및 입력
const input = fs.readFileSync(0).toString().trim();
const n = input.length;

// 모든 쌍을 다 잡아봅니다.
let cnt = 0;
for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n - 1; j++) {
        if (input[i] === '(' && input[i + 1] === '(' && input[j] === ')' && input[j + 1] === ')') {
            cnt += 1;
        }
    }
}

console.log(cnt);