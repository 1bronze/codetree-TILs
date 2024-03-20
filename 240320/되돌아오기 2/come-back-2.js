const fs = require("fs");
const input = fs.readFileSync(0).toString().trim(); // 변수 선언 및 입력
let x = 0, y = 0;
let currDir = 3;

// 동, 남, 서, 북 순으로 dx, dy를 정의합니다.
const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

// flag : 시작점으로 되돌아 왔는지 여부
let flag = false;

const len = input.length;

// 움직이는 것을 진행합니다.
for (let i = 0; i < len; i++) {
    const cDir = input[i];
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
    
    // 시작점으로 되돌아왔을 때
    if (x === 0 && y === 0) {
        console.log(i + 1);
        flag = true;
        break;
    }
}

// 시작점으로 되돌아오지 못했을 때
if (!flag) {
    console.log(-1);
}