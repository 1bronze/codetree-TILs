const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, 1 + n).map(row => row.split(' ').map(Number));
const dp = Array.from(Array(n), () => Array(n).fill(-1));

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

// (x, y)에서 출발하여 조건을 만족하며
// 도달할 수 있는 칸의 수 중
// 최대 칸의 수를 구합니다.
function findMax(x, y) {
    // 이미 계산해본적이 있다면
    // 그 값을 바로 반환합니다.
    if (dp[x][y] !== -1) {
        return dp[x][y];
    }

    // 기본값은 자기자신이 됩니다.
    let best = 1;

    // 정수값이 작은 칸부터 순서대로 보며
    // 4방향에 대해 최적의 칸 수를 계산합니다.
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i], ny = y + dy[i];
        if (inRange(nx, ny) && grid[nx][ny] > grid[x][y]) {
            best = Math.max(best, findMax(nx, ny) + 1);
        }
    }

    dp[x][y] = best;
    return dp[x][y];
}

// 각 칸에 시작했을 떄
// 최대로 이동할 수 있는 칸의 수 중 
// 최댓값을 갱신합니다.
let ans = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        ans = Math.max(ans, findMax(i, j));
    }
}

console.log(ans);