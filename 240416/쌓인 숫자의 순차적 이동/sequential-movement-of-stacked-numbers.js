const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(n => [Number(n)]));
const moveNums = input[1 + n].split(' ').map(Number);

const OUT_OF_GRID = [-1, -1];

function getPos(moveNum) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (const num of grid[i][j]) {
                if (num === moveNum) {
                    return [i, j];
                }
            }
        }
    }
};

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
};

// 그 다음 위치를 찾아 반환합니다.
function nextPos(pos) {
    const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

    const [x, y] = pos;

    // 인접한 8개의 칸 중 가장 값이 큰 위치를 찾아 반환합니다.
    let maxVal = -1, maxPos = OUT_OF_GRID;
    for (let i = 0; i < dx.length; i++) {
        const nx = x + dx[i], ny = y + dy[i];
        if (inRange(nx, ny)) {
            for (const num of grid[nx][ny]) {
                if (num > maxVal) {
                    maxVal = num;
                    maxPos = [nx, ny];
                }
            }
        }
    }

    return maxPos;
};

function move(pos, nextPos, moveNum) {
    const [[x, y], [nx, ny]] = [pos, nextPos];

    // Step1. (x, y) 위치에 있던 숫자들 중
    // move_num 위에 있는 숫자들을 전부 옆 위치로 옮겨줍니다.
    let toMove = false;
    for (const num of grid[x][y]) {
        if (num === moveNum) {
            toMove = true;
        }

        if (toMove) {
            grid[nx][ny].push(num);
        }
    }

    // Step2. (x, y) 위치에 있던 숫자들 중
    // 움직인 숫자들을 전부 비워줍니다.
    while (grid[x][y][grid[x][y].length - 1] !== moveNum) {
        grid[x][y].pop();
    }
    grid[x][y].pop();
};

function simulate(moveNum) {
    // 그 다음으로 나아가야할 위치를 구해
    // 해당 위치로 숫자들을 옮겨줍니다.
    const pos = getPos(moveNum);
    const maxPos = nextPos(pos);
    if (maxPos[0] !== OUT_OF_GRID[0] || maxPos[1] !== OUT_OF_GRID[1]) {
        move(pos, maxPos, moveNum);
    }
};

// m번 시뮬레이션을 진행합니다.
moveNums.forEach(moveNum => simulate(moveNum));

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (grid[i][j].length === 0) {
            console.log('None');
        } else {
            console.log(grid[i][j].reverse().join(' '));
        }
    }
}