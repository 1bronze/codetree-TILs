const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const isBomb = Array.from(Array(n), () => Array(n).fill(false));
const bombs = [0];

let ans = 0;

function init() {
    // let i = 0;
    for (let y = 0; y < n; y++)
        for (let x = 0; x < n; x++)
            if (grid[y][x] === 1)
                bombs.push({y: y, x: x});
    // i++;
}

function inRange(y, x) {
    return y >= 0 && y < n && x >= 0 && x < n;
}

function setBomb() {
    const types = [[[-2, 0], [-1, 0], [0, 0], [1, 0], [2, 0]],
                   [[0, 0], [-1, 0], [0, 1], [1, 0], [0, -1]],
                   [[0, 0], [-1, -1], [-1, 1], [1, -1], [1, 1]]]

    for (let y = 0; y < n; y++)
        for (let x = 0; x < n; x++)
            isBomb[y][x] = false;

    for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
            if (grid[y][x] === 0) continue;

            for (let i = 0; i < 5; i++) {
                const ny = y + types[grid[y][x] - 2][i][0];
                const nx = x + types[grid[y][x] - 2][i][1];

                if (!inRange(ny, nx)) continue;
                isBomb[ny][nx] = true;
            }
        }
    }
}

function countBomb() {
    let ret = 0;
    for (let y = 0; y < n; y++)
        for (let x = 0; x < n; x++)
            if (isBomb[y][x])
                ret++;

    return ret;
}

function recur(cnt) {
    if (cnt >= bombs.length - 1) {
        setBomb();
        ans = Math.max(ans, countBomb());
        return;
    }

    // for (let i = cnt + 1; i < bombs.length; i++) {
        let ny = bombs[cnt + 1].y;
        let nx = bombs[cnt + 1].x;

        for (let j = 2; j <= 4; j++) {
            grid[ny][nx] = j;
            recur(cnt + 1);
        }
    }
// }

init();
recur(0);
console.log(ans);