const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
let n = Number(input[0]);
const digits = [];

// 이진수로 변환합니다.
while (true) {
    if (n < 2) {
        digits.push(n);
        break;
    }

    digits.push(n % 2);
    n = Math.floor(n / 2);
}

// 이진수를 출력 합니다.
// 뒤집은 다음에 출력해야 함에 유의합니다.
console.log(digits.reverse().join(""));