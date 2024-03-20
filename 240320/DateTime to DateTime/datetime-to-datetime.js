const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [a, b, c] = input[0].split(' ').map(Number);

// 차이를 계산합니다.
const diff = (a * 24 * 60 + b * 60 + c) - (11 * 24 * 60 + 11 * 60 + 11);

// 출력
if (diff < 0) {
    console.log(-1);
} else {
    console.log(diff);
}