const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input.shift());
const points = input.slice(0, n).map(line => line.split(' ').map(Number));

// 두 점 사이의 거리의 제곱 값을 반환하는 함수
function dist(i, j) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[j];
    return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
}

// 모든 쌍에 대해서 거리 제곱값을 계산하여
// 그 중 최솟값을 찾습니다.
let minDist = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        minDist = Math.min(minDist, dist(i, j));
    }
}

console.log(minDist);