const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const OUT_OF_GRID = [-1, -1];

// 변수 선언 및 입력
let [n, m, x, y] = input[0].split(' ').map(Number);
let grid = Array.from(Array(n), () => Array(n).fill(0));
const movements = input[1].split(' ');

// 주사위가 놓여있는 상태
let up = 1, front = 2, right = 3;

// 격자 안에 있는지를 확인합니다.
function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

// 해당 방향으로 이동했을 때의 다음 위치를 구합니다.
// 이동이 불가능할 경우 OUT_OF_GRID를 반환합니다.
function nextPos(x, y, moveDir) {
    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0, 0];

    const nx = x + dx[moveDir];
    const ny = y + dy[moveDir];

    return inRange(nx, ny) ? [nx, ny] : OUT_OF_GRID;
}

function simulate(moveDir) {
    // moveDir 방향으로 굴렸을 때의 격자상의 위치를 구합니다.
    let [nx, ny] = nextPos(x, y, moveDir);
    // 굴리는게 불가능한 경우라면 패스합니다.
    if (nx === OUT_OF_GRID[0] && ny === OUT_OF_GRID[1]) {
        return;
    }
    
    // 위치를 이동합니다.
    x = nx;
    y = ny;
    
    // 주사위가 놓여있는 상태를 조정합니다.
    if (moveDir === 0) { // 동쪽
        [up, front, right] = [7 - right, front, up];
    } else if (moveDir === 1) { // 서쪽
        [up, front, right] = [right, front, 7 - up];
    } else if (moveDir === 2) { // 북쪽
        [up, front, right] = [front, 7 - up, right];
    } else { // 남쪽
        [up, front, right] = [7 - front, up, right];
    }
    
    // 바닥에 적혀있는 숫자를 변경합니다.
    let bottom = 7 - up;
    grid[x][y] = bottom;
}

x -= 1;
y -= 1;

const dirMapper = {
    'R': 0,
    'L': 1,
    'U': 2,
    'D': 3
};

// 시뮬레이션 진행
grid[x][y] = 6;
movements.forEach(charDir => {
    simulate(dirMapper[charDir]);
});

let ans = 0;
for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
        ans += grid[i][j];

console.log(ans);