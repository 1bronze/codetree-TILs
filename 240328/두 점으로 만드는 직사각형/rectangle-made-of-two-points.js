const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const [x1, y1, x2, y2] = input[0].split(' ').map(Number);
const [a1, b1, a2, b2] = input[1].split(' ').map(Number);

// 주어진 값들 중 가장 큰 x에서 가장 작은 x를 뺀 길이가 
// 세로 길이가 되어야 합니다.
// 마찬가지 이유로 가장 큰 y에서 가장 작은 y를 뺀 길이가
// 가로 길이가 되어야 합니다.
const width = Math.max(x2, a2) - Math.min(x1, a1);
const height = Math.max(y2, b2) - Math.min(y1, b1);

console.log(width * height);