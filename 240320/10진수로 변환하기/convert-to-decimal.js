const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const binary = input[0].split('').map(Number); // 문자열을 배열로 변환 후 각 문자를 숫자로 변환
const length = binary.length;

// 십진수로 변환합니다.
let num = 0;
for (let i = 0; i < length; i++) {
    num = num * 2 + binary[i];
}

// 출력
console.log(num);