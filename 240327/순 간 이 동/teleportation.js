const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [a, b, x, y] = input[0].split(' ').map(Number);

let minDist = Number.MAX_SAFE_INTEGER; // JS에서 안전한 가장 큰 정수를 나타냅니다.

// Case 1. a -> b 바로 이동
minDist = Math.min(minDist, Math.abs(b - a));

// Case 2. a -> x -> y -> b 순서로 이동
minDist = Math.min(minDist, Math.abs(x - a) + Math.abs(b - y));

// Case 3. a -> y -> x -> b 순서로 이동
minDist = Math.min(minDist, Math.abs(y - a) + Math.abs(b - x));

console.log(minDist);