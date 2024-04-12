const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m, r, c] = input[0].split(' ').map(Number);
const grid = Array.from(Array(n), () => Array(n).fill(0));
const nextGrid = Array.from(Array(n), () => Array(n).fill(0));

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function expand(x, y, dist) {
    const dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];
    for (let i = 0; i < dx.length; i++) {
        const nx = x + dx[i] * dist, ny = y + dy[i] * dist;
        if (inRange(nx, ny)) {
            nextGrid[nx][ny] = 1;
        }
    }
}

function simulate(dist) {
    // Step1. nextGrid 값을 0으로 초기화합니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            nextGrid[i][j] = 0;
        }
    }
    
    // Step2. 폭탄을 던지는 시뮬레이션을 진행합니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) {
                expand(i, j, dist);
            }
        }
    }
    
    // Step3. nextGrid 값을 grid로 업데이트 해줍니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (nextGrid[i][j]) {
                grid[i][j] = 1;
            }
        }
    }
}

grid[r - 1][c - 1] = 1;

// 총 m번 시뮬레이션을 진행합니다.
let dist = 1;
for (let i = 0; i < m; i++) {
    simulate(dist);
    dist *= 2;
}

let ans = 0;
for(let i = 0; i < n; i++)
		for(let j = 0; j < n; j++)
			ans += grid[i][j];

console.log(ans);