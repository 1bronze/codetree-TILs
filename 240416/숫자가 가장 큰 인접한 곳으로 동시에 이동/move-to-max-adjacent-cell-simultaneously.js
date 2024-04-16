const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, t] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.trim().split(' ').map(Number));
const marbles = Array.from(Array(n), () => Array(n).fill(0));
const nextMarbles = Array.from(Array(n), () => Array(n).fill(0));

input.slice(1 + n, 1 + n + m).map(line => line.trim().split(' ').map(Number)).forEach(([y, x]) => {
    marbles[y - 1][x - 1] = 1;
})

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

function isRange(y, x) {
    return (y >= 0 && y < n && x >= 0 && x < n);
}

function getMaxDir(y, x) {
    let ret = -1;
    let maxVal = -1;

    for (i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];

        if (!isRange(ny, nx)) continue;
        if (maxVal < grid[ny][nx]) {
            ret = i;
            maxVal = grid[ny][nx];
        }
    }

    return ret;
}

function move(y, x) {
    if (marbles[y][x] === 0) return;

    const nextDir = getMaxDir(y, x);
    const ny = y + dy[nextDir];
    const nx = x + dx[nextDir];
    // console.log(`(${y}, ${x}) > (${ny},${nx})`)

    nextMarbles[ny][nx] += 1;

    // for (let i = 0; i < marbles.length; i++)
    //     console.log(marbles[i])
    // console.log()
}

function removeDupMarbles() {
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            if (nextMarbles[i][j] > 1)
                nextMarbles[i][j] = 0;
}

function getResult() {
    let ret = 0;

    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            if (marbles[i][j] === 1)
                ret++;
    
    return ret;
}

function copyToOrigin() {
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            marbles[i][j] = nextMarbles[i][j];

    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            nextMarbles[i][j] = 0;
}

function solve() {
    for (let i = 0; i < t; i++) {
        for (let y = 0; y < n; y++)
            for (let x = 0; x < n; x++)
                move(y, x);

        removeDupMarbles();
        copyToOrigin();
    }

    console.log(getResult());
}

solve();