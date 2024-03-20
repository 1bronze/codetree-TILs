const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
let x = 0, y = 0;

// 동, 서, 남, 북 순으로 dx, dy를 정의합니다.
const dx = [1, -1,  0, 0];
const dy = [0,  0, -1, 1];

// 움직이는 것을 진행합니다.
for (let i = 1; i <= n; i++) {
    const [cDir, distStr] = input[i].split(' ');
    const dist = Number(distStr);
    
    // 각 방향에 맞는 번호를 붙여줍니다.
    let moveDir;
    if (cDir === 'E') {
        moveDir = 0;
    } else if (cDir === 'W') {
        moveDir = 1;
    } else if (cDir === 'S') {
        moveDir = 2;
    } else {
        moveDir = 3;
    }

    // 주어진 방향대로 dist 거리만큼 이동했을 경우의
    // 위치를 구해줍니다.
    x += dx[moveDir] * dist;
    y += dy[moveDir] * dist;
}

console.log(`${x} ${y}`);