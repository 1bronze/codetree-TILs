const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MAX = Number.MAX_SAFE_INTEGER;

const n = parseInt(input[0]);

let max_x1 = 0;
let min_x2 = INT_MAX;

// 시작점 중 가장 뒤에 있는 좌표와 끝점 중 가장 앞에 있는 점의 좌표를 확인합니다.
for (let i = 1; i <= n; i++) {
    const [x1, x2] = input[i].split(' ').map(Number);
    max_x1 = Math.max(max_x1, x1);
    min_x2 = Math.min(min_x2, x2);
}

// 만약 어느 한 선분이라도 시작점이 다른 선분의 끝점보다 뒤에 온다면
// 선분이 전부 겹칠 수 없습니다.
if (min_x2 >= max_x1) {
    console.log("Yes");
} else {
    console.log("No");
}