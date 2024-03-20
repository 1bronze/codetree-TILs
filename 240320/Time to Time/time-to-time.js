const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [a, b, c, d] = input[0].split(' ').map(Number);

// 출력
console.log((c * 60 + d) - (a * 60 + b));