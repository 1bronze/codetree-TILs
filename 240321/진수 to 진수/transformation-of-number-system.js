const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [a, b] = input[0].split(' ').map(Number);
const n = input[1];

const digits = [];

// 십진수로 변환합니다.
let num = 0;
for (let ch of n) {
    num = num * a + Number(ch);
}

// b진수로 변환합니다.
while (true) {
    if (num < b) {
        digits.push(num);
        break;
    }

    digits.push(num % b);
    num = Math.floor(num / b);
}

// 진수 배열을 뒤집어 b진수를 출력합니다.
console.log(digits.reverse().join(""));