const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const dirs = input[0];
let x = 0, y = 0;
let currDir = 3;

// 동, 남, 서, 북 순으로 dxs, dys를 정의합니다.
const dx = [1,  0, -1, 0];
const dy = [0, -1,  0, 1];

// 움직이는 것을 진행합니다.
for (let cDir of dirs) {
    // 반시계방향 90' 회전
    if (cDir === 'L') {
        currDir = (currDir - 1 + 4) % 4;
    }
    // 시계방향 90' 회전
    else if (cDir === 'R') {
        currDir = (currDir + 1) % 4;
    }
    // 직진
    else {
        x = x + dx[currDir];
        y = y + dy[currDir];
    }
}

console.log(`${x} ${y}`);