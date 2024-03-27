const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MAX = Number.MAX_SAFE_INTEGER;

const n = parseInt(input[0]);

let maxX1 = 0;
let minX2 = INT_MAX;

// 시작점 중 가장 뒤에 있는 좌표와 끝점 중 가장 앞에 있는 점의 좌표를 확인합니다.
for (let i = 1; i <= n; i++) {
    const [x1, x2] = input[i].split(' ').map(Number);
    maxX1 = Math.max(maxX1, x1);
    minX2 = Math.min(minX2, x2);
}

// 만약 어느 한 선분이라도 시작점이 다른 선분의 끝점보다 뒤에 온다면
// 선분이 전부 겹칠 수 없습니다.
if (minX2 >= maxX1) {
    console.log("Yes");
} else {
    console.log("No");
}