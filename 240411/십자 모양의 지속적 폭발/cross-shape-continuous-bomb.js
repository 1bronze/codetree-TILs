const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
let grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
let nextGrid = Array.from(Array(n), () => Array(n).fill(0));

const OUT_OF_GRID = -1;

const inBombRange = (x, y, centerX, centerY, bombRange) => {
    return (x === centerX || y === centerY) && 
           Math.abs(x - centerX) + Math.abs(y - centerY) < bombRange;
};

const bomb = (centerX, centerY) => {
    // Step1. nextGrid 값을 0으로 초기화합니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            nextGrid[i][j] = 0;
        }
    }

    // Step2. 폭탄이 터질 위치는 0으로 채워줍니다.
    const bombRange = grid[centerX][centerY];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (inBombRange(i, j, centerX, centerY, bombRange)) {
                grid[i][j] = 0;
            }
        }
    }

    // Step3. 폭탄이 터진 이후의 결과를 nextGrid에 저장합니다.
    for (let j = 0; j < n; j++) {
        let nextRow = n - 1;
        for (let i = n - 1; i >= 0; i--) {
            if (grid[i][j]) {
                nextGrid[nextRow][j] = grid[i][j];
                nextRow -= 1;
            }
        }
    }

    // Step4. grid로 다시 값을 옮겨줍니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            grid[i][j] = nextGrid[i][j];
        }
    }
};

// 해당 col 열에 폭탄이 터질 위치를 구합니다.
// 없다면 OUT_OF_GRID를 반환합니다.
const getBombRow = (col) => {
    for (let row = 0; row < n; row++) {
        if (grid[row][col] !== 0) {
            return row;
        }
    }
    
    return OUT_OF_GRID;
};

// m번에 걸쳐 폭탄이 터집니다.
let inputIndex = n + 1;
for (let i = 0; i < m; i++) {
    const bombCol = Number(input[inputIndex++]) - 1;

    // 폭탄이 터지게 될 위치를 구합니다.
    const bombRow = getBombRow(bombCol);

    if (bombRow === OUT_OF_GRID) {
        continue;
    }

    bomb(bombRow, bombCol);
}

for (let i = 0; i < n; i++) {
    console.log(grid[i].join(' '));
}