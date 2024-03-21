const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));

// 이동 시에 행과 열이 전부 증가하도록
// 모든 쌍을 다 잡아봅니다.
let cnt = 0;
for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
        for (let k = i + 1; k < n - 1; k++) {
            for (let l = j + 1; l < m - 1; l++) {
                // 그 중 색깔이 전부 달라지는 경우에만 개수를 세줍니다.
                if (grid[0][0] !== grid[i][j] &&
                    grid[i][j] !== grid[k][l] &&
                    grid[k][l] !== grid[n - 1][m - 1]) {
                    cnt += 1;
                }
            }
        }
    }
}

console.log(cnt);