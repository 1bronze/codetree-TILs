const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const binary = input[0].split('').map(Number);
const length = binary.length;

// 십진수로 변환합니다.
let num = 0;
binary.forEach(bit => {
    num = num * 2 + bit;
})

// 출력
console.log(num);