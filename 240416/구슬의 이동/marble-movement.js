const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, t, k] = input[0].split(' ').map(Number);
const grid = Array.from(Array(n), () => Array.from(Array(n), () => []));
let tmpGrid = Array.from(Array(n), () => Array.from(Array(n), () => []));

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

const mapper = {
    'U': 0,
    'R': 1,
    'D': 2,
    'L': 3,
}

const marbles = [];
input.slice(1, 1 + m).map((line, i) => {
    const [r, c, d, v] = line.split(' ');

    marbles.push({
        i: i,
        d: mapper[d],
        v: Number(v),
    });
    
    grid[Number(r) - 1][Number(c) - 1].push(i);
})

function inRange(y, x) {
    return y >= 0 && y < n && x >= 0 && x < n;
}

function move(y, x) {
    for (let marble of grid[y][x]) {
        const v = marbles[marble].v;
        let ny = y;
        let nx = x;
        let dir = marbles[marble].d;

        for (let cnt = 0; cnt < v; cnt++) {
            if (!inRange(ny + dy[dir], nx + dx[dir]))
                dir = (dir + 2) % 4;
        
            ny += dy[dir];
            nx += dx[dir];
        }

        tmpGrid[ny][nx].push(marble);
    }
}

function copyGrid() {
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            grid[i][j] = [...tmpGrid[i][j]]
        
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            tmpGrid[i][j] = [];
}

function resolveDuplicateMarbles(y, x) {
    let curMarbles = grid[y][x];

    curMarbles.sort((m1, m2) => {
        if (m1.v !== m2.v) return m2.v - m1.v;
        else return m2.i - m1.i;
    }).splice(k);
}

function solve() {
    for (let cnt = 0; cnt < t; cnt++) {
        for (y = 0; y < n; y++)
            for (x = 0; x < n; x++)
                if (grid[y][x].length !== 0) 
                    move(y, x);
    
        copyGrid();

        for (y = 0; y < n; y++)
            for (x = 0; x < n; x++)
                if (grid[y][x].length >= k)
                    resolveDuplicateMarbles(y, x);
    }

    let ans = 0;
    for (y = 0; y < n; y++)
        for (x = 0; x < n; x++)
            if (grid[y][x].length !== 0)
                ans += grid[y][x].length;

    console.log(ans);
}

solve();