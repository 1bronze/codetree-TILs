const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const binary = input[0].split('').map(Number);
const length = binary.length;

// 십진수로 변환합니다.
let num = 0;
for (let i = 0; i < length; i++) {
    num = num * 2 + binary[i];
}

// 십진수에 17을 곱합니다.
num *= 17;

const digits = [];

// 이진수로 변환합니다.
while (true) {
    if (num < 2) {
        digits.push(num);
        break;
    }

    digits.push(num % 2);
    num = Math.floor(num / 2); // JS에서 나눗셈 결과가 자동으로 float이 되므로 Math.floor로 내림
}

// 이진수를 출력 합니다.
// 뒤집은 다음에 출력해야 함에 유의합니다.
let result = '';
for (let i = digits.length - 1; i >= 0; i--) {
    result += digits[i];
}
console.log(result);