const OUT_OF_GRID = [-1, -1];

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const grid = Array.from(Array(n), () => Array.from(Array(n), () => []));

const getPos = moveNum => {
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

const inRange = (x, y) => {
    return 0 <= x && x < n && 0 <= y && y < n;
};

const nextPos = pos => {
    const dxs = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dys = [-1, 0, 1, -1, 1, -1, 0, 1];

    const [x, y] = pos;

    let maxVal = -1, maxPos = OUT_OF_GRID;
    for (let i = 0; i < dxs.length; i++) {
        const nx = x + dxs[i], ny = y + dys[i];
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

const move = (pos, nextPos, moveNum) => {
    const [[x, y], [nx, ny]] = [pos, nextPos];

    let toMove = false;
    for (const num of grid[x][y]) {
        if (num === moveNum) {
            toMove = true;
        }

        if (toMove) {
            grid[nx][ny].push(num);
        }
    }

    while (grid[x][y][grid[x][y].length - 1] !== moveNum) {
        grid[x][y].pop();
    }
    grid[x][y].pop();
};

const simulate = moveNum => {
    const pos = getPos(moveNum);
    const maxPos = nextPos(pos);
    if (maxPos[0] !== OUT_OF_GRID[0] || maxPos[1] !== OUT_OF_GRID[1]) {
        move(pos, maxPos, moveNum);
    }
};

let lineNumber = 0;
for (let i = 0; i < n; i++) {
    const givenRow = input[lineNumber++].split(' ').map(Number);
    for (let j = 0; j < n; j++) {
        grid[i][j].push(givenRow[j]);
    }
}

const moveNums = input[lineNumber].split(' ').map(Number);
moveNums.forEach(moveNum => {
    simulate(moveNum);
});

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (grid[i][j].length === 0) {
            console.log('None');
        } else {
            console.log(grid[i][j].reverse().join(' '));
            // grid[i][j].reverse(); // 원상복구
        }
    }
}