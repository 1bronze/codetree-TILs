const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, b] = input[0].split(' ').map(Number);
const digits = [];

// b진수로 변환합니다.
while (true) {
    if (n < b) {
        digits.push(n);
        break;
    }

    digits.push(n % b);
    n = Math.floor(n / b); // JS에서는 나눗셈 결과가 자동으로 float이 되므로 floor함수로 내림해야 합니다.
}

// b진수를 출력 합니다.
// 뒤집은 다음에 출력해야 함에 유의합니다.
let result = '';
for (let i = digits.length - 1; i >= 0; i--) {
    result += digits[i];
}
console.log(result);