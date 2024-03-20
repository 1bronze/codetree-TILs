const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const [n, t] = input[0].split(' ').map(Number);
const commands = input[1];
const board = input.slice(2, 2 + n).map(row => row.split(' ').map(Number));

let ans = 0;

// 초기 시작 위치를 설정합니다.
let x = Math.floor(n / 2), y = Math.floor(n / 2), moveDir = 0;

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function simulate() {
    const dx = [-1, 0, 1,  0];
    const dy = [ 0, 1, 0, -1];
    
    for (let command of commands) {
        // R 명령이 나올 경우 방향을 오른쪽으로 바꿔줍니다.
        if (command === 'R') {
            moveDir = (moveDir + 1) % 4;
        // L 명령이 나올 경우 방향을 왼쪽으로 바꿔줍니다.
        } else if (command === 'L') {
            moveDir = (moveDir + 3) % 4;
        // 해당 방향으로 움직입니다.
        } else {
            const nx = x + dx[moveDir];
            const ny = y + dy[moveDir];
            // 이동할 수 있는 칸이면 이동합니다.
            // 해당 칸 안에 있는 숫자를 정답에 더해줍니다.
            if (inRange(nx, ny)) {
                ans += board[nx][ny];
                x = nx;
                y = ny;
            }
        }
    }
}

ans += board[x][y]; // 현재 위치의 값을 먼저 더해줍니다.
simulate();

// 정답을 출력합니다.
console.log(ans);