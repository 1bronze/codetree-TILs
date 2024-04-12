const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

function check(y, x, len) {
    if (y === n - 1) return false;

    let flag = true;
    for (let i = x; i < x + len; i++)
        if (grid[y + 1][i] !== 0)
            flag = false;
    
    return flag;
}

function drop(y, x, len) {
    for (let i = x; i < x + len; i++) {
        grid[y + 1][i] = 1;
        grid[y][i] = 0;
    }
}

for (let i = k - 1; i < k + m - 1; i++)
    grid[0][i] = 1;

let r = 0;
while (check(r, k - 1, m)) 
    drop(r++, k - 1, m)

for (let i = 0; i < n; i++)
    console.log(grid[i].join(' '));