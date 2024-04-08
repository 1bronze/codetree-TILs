const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

const dir = [[1, 1], [-1, 1], [-1, -1], [1, -1]];

function getGoldCnt(y, x, k) {
    let goldCnt = 0;

    for (let i = 0; i < 4; i++) {
        for (let dy = 0; dy <= k; dy++) {
            for (let dx = 0; dx <= k - dy; dx++) {
                let ny = y + (dir[i][0] * dy);
                let nx = x + (dir[i][1] * dx);
                if (ny < 0 || ny >= n || nx < 0 || nx >= n) continue;

                if (grid[ny][nx] === 1) {
                   goldCnt++;
                }
            }
        }
    }

    for (let d = -1 * k; d <= k; d++) {
        if (y + d >= 0 && y + d < n)
            if (grid[y + d][x] === 1) 
                goldCnt--;
        if (x + d >= 0 && x + d < n)
            if (grid[y][x + d] === 1) 
                goldCnt--;
    }

    if (grid[y][x] === 1) goldCnt--;

    return goldCnt;
}

let ans = 0;

for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
        for (let k = 0; k <= n; k++) {
            let goldCnt = getGoldCnt(y, x, k);

            if (goldCnt * m >= k * k + (k + 1) * (k + 1)) {
                if (ans < goldCnt) {
                    ans = goldCnt;
                }
            }
        }
    }
}

console.log(ans);