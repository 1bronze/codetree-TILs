const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = [0].concat(input.slice(1, 1 + n).map(line => [0].concat(line.split(" ").map(Number))));
const [r, c, m1, m2, m3, m4, dir] = input[1 + n].split(" ").map(Number);

const tmp = [];

const dy = [0, -1, -1, 1, 1];
const dx = [0, 1, -1, -1, 1];

let y = r;
let x = c;
tmp.push(grid[y][x]);

for (let i = 0; i < m1; i++) {
    y += dy[1];
    x += dx[1];
    tmp.push(grid[y][x]);
}

for (let i = 0; i < m2; i++) {
    y += dy[2];
    x += dx[2];
    tmp.push(grid[y][x]);
}

for (let i = 0; i < m3; i++) {
    y += dy[3];
    x += dx[3];
    tmp.push(grid[y][x]);
}

for (let i = 0; i < m4 - 1; i++) {
    y += dy[4];
    x += dx[4];
    tmp.push(grid[y][x]);
}

// console.log(tmp.join(" "));

if (dir === 0) { // 반시계
    let target = tmp[tmp.length - 1];
    for (let i = tmp.length - 1; i > 0; i--)
        tmp[i] = tmp[i - 1];
    tmp[0] = target;
} else { // 시계
    let target = tmp[0];
    for (let i = 0; i < tmp.length - 1; i++)
        tmp[i] = tmp[i + 1];
    tmp[tmp.length - 1] = target;
}

// console.log(tmp.join(" "));

y = r;
x = c;

let pointer = 0;
grid[y][x] = tmp[pointer++];

for (let i = 0; i < m1; i++) {
    y += dy[1];
    x += dx[1];
    grid[y][x] = tmp[pointer++];
}

for (let i = 0; i < m2; i++) {
    y += dy[2];
    x += dx[2];
    grid[y][x] = tmp[pointer++];
}

for (let i = 0; i < m3; i++) {
    y += dy[3];
    x += dx[3];
    grid[y][x] = tmp[pointer++];
}

for (let i = 0; i < m4 - 1; i++) {
    y += dy[4];
    x += dx[4];
    grid[y][x] = tmp[pointer++];
}

for (let i = 1; i <= n; i++) {
    console.log(grid[i].slice(1, 1 + n).join(" "));
}

// console.log(tmp.join(" "));