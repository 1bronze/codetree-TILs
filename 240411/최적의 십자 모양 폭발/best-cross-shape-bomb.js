const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.trim().split(' ').map(Number));
const nextGrid = Array.from(Array(n), () => Array(n).fill(0));
const temp = Array.from(Array(n), () => Array(n).fill(0));

function inBombRange(x, y, centerX, centerY, bombRange) {
    return (x === centerX || y === centerY) && 
           Math.abs(x - centerX) + Math.abs(y - centerY) < bombRange;
}

function bomb(centerX, centerY) {
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
}

function saveGrid() {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            temp[i][j] = grid[i][j];
        }
    }
}

function loadGrid() {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            grid[i][j] = temp[i][j];
        }
    }
}

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function meetTheCondition(x, y, nx, ny) {
    return inRange(x, y) && inRange(nx, ny) && grid[x][y] && grid[x][y] === grid[nx][ny];
}

function calc() {
    let cnt = 0;
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            const dxs = [-1, 1, 0, 0], dys = [0, 0, 1, -1];
            
            dxs.forEach((dx, index) => {
                const dy = dys[index];
                const nx = x + dx, ny = y + dy;
                if (meetTheCondition(x, y, nx, ny)) {
                    cnt += 1;
                }
            });
        }
    }
    
    // 중복되어 2번씩 count되므로 2로 나누어줍니다.
    return cnt / 2;
}

let ans = 0;

// 각 위치에 대해 진행해보고 그 중 최대 만족 횟수를 구합니다.
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        saveGrid();
        bomb(i, j);
        ans = Math.max(ans, calc());
        loadGrid();
    }
}

console.log(ans);