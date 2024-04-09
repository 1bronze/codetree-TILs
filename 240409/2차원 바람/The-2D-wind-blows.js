const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, q] = input[0].split(" ").map(Number);
const grid = [0].concat(input.slice(1, 1 + n).map(line => [0].concat(line.split(" ").map(Number))));
const commands = input.slice(1 + n, 1 + n + q).map(line => line.split(" "));

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

function rotate(r1, c1, r2, c2) {
    let tmp = grid[r1][c2];

    // 윗변
    for (let x = c2; x > c1; x--)
        grid[r1][x] = grid[r1][x - 1];

    // 좌변
    for (let y = r1; y < r2; y++)
        grid[y][c1] = grid[y + 1][c1];

    // 아랫변
    for (let x = c1; x < c2; x++)
        grid[r2][x] = grid[r2][x + 1];

    // 우변
    for (let y = r2; y > r1; y--)
        grid[y][c2] = grid[y - 1][c2];

    grid[r1 + 1][c2] = tmp;
}

function getAvgs(r1, c1, r2, c2) {
    const avgGrid = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

    for (let y = r1; y <= r2; y++) {
        for (let x = c1; x <= c2; x++) {
            let avg = grid[y][x];
            let cnt = 1;
            for (let i = 0; i < 4; i++) {
                let ny = y + dy[i];
                let nx = x + dx[i];

                if (ny < 1 || ny > n || nx < 1 || nx > m) continue;

                avg += grid[ny][nx];
                cnt++;
            }

            avg = Math.floor(avg/cnt);
            avgGrid[y][x] = avg;
        }
    }

    return avgGrid;
}

function move(r1, c1, r2, c2) {
    rotate(r1, c1, r2, c2);
    
    const avgs = getAvgs(r1, c1, r2, c2);

    for (let y = r1; y <= r2; y++) {
        for (let x = c1; x <= c2; x++) {
            grid[y][x] = avgs[y][x];
        }
    }
}

commands.forEach(([r1, c1, r2, c2]) => move(Number(r1), Number(c1), Number(r2), Number(c2)));

for (let r = 1; r <= n; r++)
        console.log(grid[r].slice(1, 1 + m).join(" "));