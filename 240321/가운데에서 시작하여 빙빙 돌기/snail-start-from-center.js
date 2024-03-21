const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const n = Number(input[0]);
const grid = Array.from({ length: n }, () => Array(n).fill(0));

// 시작 위치와 방향, 해당 방향으로 이동할 횟수를 설정합니다.
let currX = Math.floor(n / 2), currY = Math.floor(n / 2);
let moveDir = 0, moveNum = 1;

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

// 한 칸 움직이며 청소를 진행합니다.
function move() {
    // 문제에서 원하는 진행 순서대로 오른쪽, 위, 왼쪽, 아래 방향이 되도록 정의합니다.
    const dx = [0, -1, 0, 1], dy = [1, 0, -1, 0];
    currX += dx[moveDir];
    currY += dy[moveDir];
}

function end() {
    return !inRange(currX, currY);
}

// 시작 위치와 방향, 해당 방향으로 이동할 횟수를 설정합니다.
let cnt = 1;

while (!end()) {
    // moveNum 만큼 이동합니다.
    for (let i = 0; i < moveNum; i++) {
        grid[currX][currY] = cnt;
        cnt += 1;
        
        move();
        
        // 이동하는 도중 격자를 벗어나게 되면, 움직이는 것을 종료합니다.
        if (end()) {
            break;
        }
    }
    
    // 방향을 바꿉니다.
    moveDir = (moveDir + 1) % 4;
    // 만약 현재 방향이 왼쪽 혹은 오른쪽이 된 경우에는 특정 방향으로 움직여야 할 횟수를 1 증가시킵니다.
    if (moveDir === 0 || moveDir === 2) {
        moveNum += 1;
    }
}

// 출력:
gird.forEach(row => {
    console.log(row.join(' '));
});