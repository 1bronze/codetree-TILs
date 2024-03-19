const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = parseInt(input[0]); // 첫 번째 입력값을 n으로 할당 후 배열에서 제거
let distances = [];

// 원점과의 거리를 계산하는 함수입니다.
function getDistFromOrigin(x, y) {
    return Math.abs(x) + Math.abs(y);
}

for (let i = 1; i < n; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    // 원점과의 거리와 index를 저장합니다.
    distances.push([getDistFromOrigin(x, y), i + 1]);
}

distances.sort((a, b) => a[0] - b[0]);

for (let i = 0; i < n; i++) {
    console.log(distances[i][1]);
}