const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

// 변수 선언 및 입력
const string = input;
const n = string.length;

// 모든 쌍을 다 잡아봅니다.
let cnt = 0;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (string[i] === '(' && string[j] === ')') {
            cnt += 1;
        }
    }
}

console.log(cnt);