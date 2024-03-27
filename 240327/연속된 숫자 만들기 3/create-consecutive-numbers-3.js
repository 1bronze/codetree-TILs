const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const arr = input[0].split(" ").map(Number);

// 주어진 값들을 정렬합니다.
arr.sort((a, b) => a - b);

console.log(Math.max(arr[1] - arr[0], arr[2] - arr[1]) - 1);