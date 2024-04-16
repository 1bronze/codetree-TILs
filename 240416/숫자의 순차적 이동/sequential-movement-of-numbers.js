const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function findPos(num) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === num) {
                return [i, j];
            }
        }
    }
}

// 그 다음 위치를 찾아 반환합니다.
function nextPos(pos) {
    const dxs = [-1, -1, -1,  0, 0,  1, 1, 1];
    const dys = [-1,  0,  1, -1, 1, -1, 0, 1];
    
    const [x, y] = pos;
    
    // 인접한 8개의 칸 중 가장 값이 큰 위치를 찾아 반환합니다.
    let maxVal = -1;
    let maxPos = [-1, -1];
    for (let i = 0; i < dxs.length; i++) {
        const nx = x + dxs[i];
        const ny = y + dys[i];
        if (inRange(nx, ny) && grid[nx][ny] > maxVal) {
            maxVal = grid[nx][ny];
            maxPos = [nx, ny];
        }
    }
    
    return maxPos;
}

function swap(pos, nextPos) {
    const [x, y] = pos;
    const [nx, ny] = nextPos;
    [grid[x][y], grid[nx][ny]] = [grid[nx][ny], grid[x][y]];
}

function simulate() {
    // 번호가 증가하는 순으로
    // 그 다음 위치를 구해
    // 한 칸씩 움직입니다.
    for (let num = 1; num <= n * n; num++) {
        const pos = findPos(num);
        const maxPos = nextPos(pos);
        swap(pos, maxPos);
    }
}

// m번 시뮬레이션을 진행합니다.
for (let i = 0; i < m; i++) {
    simulate();
}

let result = '';
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        result += `${grid[i][j]} `;
    }
    result += '\n';
}
console.log(result);