const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = [0].concat(input.slice(1, 1 + n).map(line => [0].concat(line.split(' ').map(Number))));
const [r, c] = input[1 + n].split(' ').map(Number);
const d = grid[r][c];

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < d; j++) {
        let ny = r + j * dy[i];
        let nx = c + j * dx[i];

        if (ny < 1 || ny > n || nx < 1 || nx > n) 
            continue;

        grid[ny][nx] = 0;   
    }
}

// for (let i = 0; i <= n; i++)
//     console.log(grid[i]);
// console.log();

for (let x = 1; x <= n; x++) {
    let tmpArr = [];
    let tmpRow = n;

    for (let y = 0; y <= n; y++) 
        tmpArr.push(grid[y][x]);

    // console.log(tmpArr);

    for (let y = n; y >= 1; y--) {
        if (tmpArr[y] === 0) continue;
        tmpArr[tmpRow--] = tmpArr[y];
    }

    while (tmpRow > 0) {
        tmpArr[tmpRow--] = 0;
    }

    for (let y = 1; y <= n; y++) 
        grid[y][x] = tmpArr[y];
}

for (let i = 1; i <= n; i++)
    console.log(grid[i].slice(1, 1 + n).join(" "));