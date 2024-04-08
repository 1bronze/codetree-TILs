const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

const dy = [[0, 0, 1, 1], [0, 0, 0], [0, 1, 2]];
const dx = [[0, 1, 0, 1], [0, 1, 2], [0, 0, 0]];

let ans = 0;
for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
        // 첫 번째 모양의 블록
        let sum = 0; let flag = true;
        for (let i = 0; i < 4; i++) {
            let ny = y + dy[0][i];
            let nx = x + dx[0][i];
            if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
                flag = false;
                continue;
            }
            sum += grid[ny][nx];
        }
        for (let i = 0; i < 4; i++) {
            if (!flag) break;
            let ny = y + dy[0][i];
            let nx = x + dx[0][i];
            sum -= grid[ny][nx];
            ans = Math.max(ans, sum);
            sum += grid[ny][nx];
        }

        // 두 번째 모양의 블록 (가로)
        sum = 0;
        for (let i = 0; i < 3; i++) {
            let ny = y + dy[1][i];
            let nx = x + dx[1][i];
            if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
            sum += grid[ny][nx];
        }
        ans = Math.max(ans, sum);

        // 두 번째 모양의 블록 (세로)
        sum = 0;
        for (let i = 0; i < 3; i++) {
            let ny = y + dy[2][i];
            let nx = x + dx[2][i];
            if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
            sum += grid[ny][nx];
        }
        ans = Math.max(ans, sum);
    }
}

console.log(ans);