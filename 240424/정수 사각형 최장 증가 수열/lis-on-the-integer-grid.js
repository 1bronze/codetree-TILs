const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const n = Number(input[0]);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const dp = Array.from(Array(n), () => Array(n).fill(0));

let cells = [];
let ans = 0;

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

// 각 칸에 적혀있는 정수값 기준으로
// 오름차순이 되도록 칸의 위치들을 정렬합니다.
// 편하게 정렬하기 위해
// (칸에 적혀있는 값, 행 위치, 열 위치) 순으로 넣어줍니다.
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        cells.push([grid[i][j], i, j]);
    }
}

// 오름차순으로 정렬을 진행합니다.
cells.sort((a, b) => a[0] - b[0]);

// 처음 DP 값들은 전부 1로 초기화해줍니다. (해당 칸에서 시작하는 경우)
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        dp[i][j] = 1;
    }
}

// 정수값이 작은 칸부터 순서대로 보며
// 4방향에 대해 dp 값을 갱신해줍니다.
cells.forEach(([value, x, y]) => {
    const dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];

    // 인접한 4개의 칸에 대해 갱신을 진행합니다.
    for (let i = 0; i < dx.length; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        
        if (inRange(nx, ny) && grid[nx][ny] > grid[x][y]) {
            dp[nx][ny] = Math.max(dp[nx][ny], dp[x][y] + 1);
        }
    }
});

// 전체 수들 중 최댓값을 찾습니다.
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        ans = Math.max(ans, dp[i][j]);
    }
}

console.log(ans);