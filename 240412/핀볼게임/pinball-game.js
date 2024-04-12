const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const grid = input.slice(1, n+1).map(line => line.split(' ').map(Number));

// 범위 내에 있는지 확인
function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

// 시간 계산
function calc(x, y, moveDir) {
    const dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];
    // 1번 블럭에서는 방향이 다음과 같이 변합니다 : 0<->3 1<->2
    // 2번 블럭에서는 방향이 다음과 같이 변합니다 : 0<->2 1<->3
    
    let elapsedTime = 1;
    
    while (inRange(x, y)) {
        if (grid[x][y] == 1) {
            moveDir = 3 - moveDir;
        } else if (grid[x][y] == 2) {
            moveDir = (moveDir + 2) % 4;
        }
        
        x += dx[moveDir];
        y += dy[moveDir];
        elapsedTime += 1;
    }
    
    return elapsedTime;
}

// 각각의 상하좌우 방향에 대해
// 가능한 모든 위치에서 걸리는 시간을 계산한 후,
// 그 중 최댓값을 구합니다.
let ans = 0;
for (let i = 0; i < n; i++) {
    ans = Math.max(ans, calc(n - 1, i, 0));
    ans = Math.max(ans, calc(0, i, 1));
    ans = Math.max(ans, calc(i, n - 1, 2));
    ans = Math.max(ans, calc(i, 0, 3));
}

console.log(ans);