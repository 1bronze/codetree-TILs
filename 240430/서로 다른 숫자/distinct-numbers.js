const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

const s = new Set(arr);
console.log(s.size);