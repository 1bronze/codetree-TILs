// 변수 선언 및 입력
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const nums = input[1].split(' ').map(Number);

// 오름차순 정렬
nums.sort((a, b) => a - b);
console.log(nums.join(' '));

// 내림차순 정렬
nums.sort((a, b) => b - a);
console.log(nums.join(' '));