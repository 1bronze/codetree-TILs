const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = input.slice(1, n + 1);

const startNum = Number(input[n + 1]);

// 주어진 숫자에 따라 시작 위치와 방향을 구합니다.
function initialize(num) {
    if (num <= n) {
        return [0, num - 1, 0];
    } else if (num <= 2 * n) {
        return [num - n - 1, n - 1, 1];
    } else if (num <= 3 * n) {
        return [n - 1, n - (num - 2 * n), 2];
    } else {
        return [n - (num - 3 * n), 0, 3];
    }
}

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

// (x, y)에서 시작하여 nextDir 방향으로 이동한 이후의 위치를 반환합니다.
function move(x, y, nextDir) {
    const dx = [1, 0, -1, 0], dy = [0, -1, 0, 1];
    const nx = x + dx[nextDir], ny = y + dy[nextDir];
    return [nx, ny, nextDir];
}

function simulate(x, y, moveDir) {
    let moveNum = 0;
    while (inRange(x, y)) {
        // 0 <-> 1 / 2 <-> 3
        if (arr[x][y] === '/') {
            [x, y, moveDir] = move(x, y, moveDir ^ 1);
        // 0 <-> 3 / 1 <-> 2
        } else {
            [x, y, moveDir] = move(x, y, 3 - moveDir);
        }
        
        moveNum += 1;
    }
    
    return moveNum;
}

// 시작 위치와 방향을 구합니다.
let [x, y, moveDir] = initialize(startNum);
// (x, y)에서 moveDir 방향으로 시작하여 시뮬레이션을 진행합니다.
const moveNum = simulate(x, y, moveDir);
console.log(moveNum);