const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(n => [Number(n)]));
const movements = input[1 + n].split(' ').map(Number);

const dy = [0, -1, -1, -1, 0, 1, 1, 1, 0];
const dx = [0, -1, 0, 1, 1, 1, 0, -1, -1];

function find(target) {
    for (let y = 0; y < n; y++)
        for (let x = 0; x < n; x++)
            for (let i = 0; i < grid[y][x].length; i++)
                if (grid[y][x][i] === target)
                    return [y, x, i];

    return [-1, -1, -1];
}

function inRange(y, x) {
    return y >= 0 && y < n && x >= 0 && x < n;
}

function getMaxDir(y, x) {
    let maxVal = 0;
    let maxDir = 0;

    for (let i = 1; i <= 9; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];

        if (!inRange(ny, nx)) continue;

        let tmp = -1;
        for (let j = 0; j < grid[ny][nx].length; j++)
            tmp = Math.max(tmp, grid[ny][nx][j]);

        if (maxVal < tmp) {
            maxDir = i;
            maxVal = tmp;
        }
    }

    return maxDir;
}

function moveArray(fromY, fromX, targetIdx, toY, toX) {
    grid[toY][toX] = grid[toY][toX].concat(...grid[fromY][fromX].splice(targetIdx));
}

function print() {
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
            if (grid[y][x].length === 0)
                console.log("None");
            else
                console.log(grid[y][x].reverse().join(" "));
        }
    }
}

function solve() {
    for (let target of movements) {
        const [y, x, i] = find(target);
        const dir = getMaxDir(y, x);
        // console.log(y, x, i, dir);

        const ny = y + dy[dir];
        const nx = x + dx[dir];

        // console.log(y, x, i, ny, nx);
        moveArray(y, x, i, ny, nx);
    }

    print();
}

solve();