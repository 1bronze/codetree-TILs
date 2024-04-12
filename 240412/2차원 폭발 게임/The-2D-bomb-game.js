const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
let grid = input.slice(1, n + 1).map(line => line.trim().split(' ').map(Number));

function testPrint() {
    for (let r = 0; r < n; r++)
        console.log(grid[r].join(" "));
        console.log();
}

function canBomb(c) {
    let cnt = 0;
    let max = 0;

    if (grid[0][c] == 1) {
        cnt = 1;
        max = 1;
    }

    for (let r = 1; r < n; r++) {
        if (grid[r][c] === 0) continue;

        if (cnt === 0) cnt = 1;
        if (grid[r][c] === grid[r - 1][c]) 
            cnt++;
        else {
            max = Math.max(max, cnt);
            cnt = 1;
        }
    }
    max = Math.max(max, cnt);
    return (max>=m);
}

function bomb(c) {
    let startRow = 0;
    let endRow = 0;

    for (let r = 1; r < n; r++) {
        if (grid[r][c] !== grid[r - 1][c]) {
            if (endRow - startRow + 1 >= m) {
                for (let i = startRow; i <= endRow; i++) {
                    grid[i][c] = 0;
                } 
            } 
            startRow = r;
            endRow = r;
        } else {
            endRow++;
        }
    }
    if (endRow - startRow + 1 >= m) {
        for (let i = startRow; i <= endRow; i++) {
            grid[i][c] = 0;
        }
    }
}

function drop(c) {
    let tmpArr = Array(n).fill(0);
    let tmpRow = 0;
    for (let r = 0; r < n; r++) {
        if (grid[r][c] !== 0) {
            tmpArr[tmpRow++] = grid[r][c];
        }
    }

    let r = n - 1;
    for (let tmpRow = n - 1; tmpRow >= 0; tmpRow--) {
        if (tmpArr[tmpRow] === 0) continue;
        grid[r--][c] = tmpArr[tmpRow];
    }

    for (let i = r; i >= 0; i--) {
        grid[i][c] = 0;
    }
}

function rotate() {
    let tmpGrid = Array.from(Array(n), () => Array(n).fill(0));

    for (let y = 0; y < n; y++)
        for (let x = 0; x < n; x++)
            tmpGrid[x][n - y - 1] = grid[y][x];

    for (let y = 0; y < n; y++)
        for (let x = 0; x < n; x++)
            grid[y][x] = tmpGrid[y][x];
}

function count() {
    let cnt = 0;
    
    for (let y = 0; y < n; y++)
        for (let x = 0; x < n; x++)
            if (grid[y][x] !== 0) cnt++;
    
    return cnt;
}

function solve() {
    for (let i = 0; i < n; i++) {
        while (canBomb(i)) {
            bomb(i);
            drop(i);
        }
    }

    for (let i = 0; i < k; i++) {
        rotate();
        for (let j = 0; j < n; j++)
            drop(j);

        for (let j = 0; j < n; j++) {
            while (canBomb(j)) {
                bomb(j);
                drop(j);
            }
        }
    }

    let ans = count();
    console.log(ans);
}

// testPrint();

solve();