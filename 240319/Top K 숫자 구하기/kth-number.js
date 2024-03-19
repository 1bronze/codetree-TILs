// 변수 선언  및 입력
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = input[0].split(' ')[0];
const k = input[0].split(' ')[1];
const nums = input[1].split(' ');

// nums를 정렬합니다.
nums.sort();

// k번째 원소를 출력합니다.
console.log(nums[k - 1]);