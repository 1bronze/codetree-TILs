const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [x1, y1, x2, y2] = input[0].split(' ').map(Number);
const [a1, b1, a2, b2] = input[1].split(' ').map(Number);

// 만약 직사각형으로 두 직사각형을 포함시키고자 한다면,
// 주어진 값들 중 가장 큰 x에서 가장 작은 x를 뺀 길이가 
// 세로 길이가 되어야 합니다.
// 마찬가지 이유로 가장 큰 y에서 가장 작은 y를 뺀 길이가
// 가로 길이가 되어야 합니다.
const width = Math.max(x2, a2) - Math.min(x1, a1);
const height = Math.max(y2, b2) - Math.min(y1, b1);

// 정사각형으로 위 영역을 포함시키려면,
// 위 직사각형을 덮을 수 있는 있어야 합니다.
// 즉, 한 변의 길이가 직사각형의 가로 세로중 더 긴 쪽 이상이여야 합니다.
console.log(Math.max(width, height) * Math.max(width, height));