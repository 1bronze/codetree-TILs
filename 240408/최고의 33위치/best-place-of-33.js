const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));


// (rowS, colS) ~ (rowE, colE) 사이의 금의 개수를 계산합니다.
function getNumOfGold(rowS, colS, rowE, colE) {
    let numOfGold = 0;

    for (let row = rowS; row <= rowE; row++) {
        for (let col = colS; col <= colE; col++) {
            numOfGold += grid[row][col];
        }
    }

    return numOfGold;
}

let maxGold = 0;

// (row, col)이 3 * 3 격자의 좌측 상단 모서리인 경우를 전부 탐색합니다.
for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
        // 3 * 3 격자가 n * n 격자를 벗어나는 경우는 계산하지 않습니다.
        if (row + 2 >= n || col + 2 >= n) {
            continue;
        }
        
        const numOfGold = getNumOfGold(row, col, row + 2, col + 2);
            
        // 최대 금의 개수를 저장합니다.
        maxGold = Math.max(maxGold, numOfGold);
    }
}

console.log(maxGold);