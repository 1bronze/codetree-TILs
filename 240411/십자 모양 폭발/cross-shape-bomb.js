const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const nextGrid = Array(n).fill().map(() => Array(n).fill(0));
const [r, c] = input[1 + n].split(' ').map(Number);
const d = grid[r][c];

function inBombRange(x, y, centerX, centerY, bombRange) {
    return (x === centerX || y === centerY) && 
           (Math.abs(x - centerX) + Math.abs(y - centerY) < bombRange);
}

function bomb(centerX, centerY) {
    const bombRange = grid[centerX][centerY];
    
    // Step1. 폭탄이 터질 위치는 0으로 채워줍니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (inBombRange(i, j, centerX, centerY, bombRange)) {
                grid[i][j] = 0;
            }
        }
    }

    // Step2. 폭탄이 터진 이후의 결과를 nextGrid에 저장합니다.
    for (let j = 0; j < n; j++) {
        let nextRow = n - 1;
        for (let i = n - 1; i >= 0; i--) {
            if (grid[i][j]) {
                nextGrid[nextRow][j] = grid[i][j];
                nextRow -= 1;
            }
        }
    }

    // Step3. grid로 다시 값을 옮겨줍니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            grid[i][j] = nextGrid[i][j];
        }
    }
}

bomb(r - 1, c - 1);

for (let i = 0; i < n; i++) {
    console.log(grid[i].join(' '));
}