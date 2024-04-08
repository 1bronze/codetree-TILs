const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

function getArea(k) {
    return k * k + (k + 1) * (k + 1);
}

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

// 주어진 k에 대하여 채굴 가능한 금의 개수를 반환합니다.
function getNumOfGoldInBorder(row, col, k) {
    const dx = [1, 1, -1, -1], dy = [-1, 1, 1, -1];
    
    if (k === 0) {
        return grid[row][col];
    }
    
    let numOfGold = 0;
    
    let currX = row - k, currY = col; // 순회 시작점 설정
    for (let dir = 0; dir < 4; dir++) {
        for (let step = 0; step < k; step++) {
            if (inRange(currX, currY)) {
                numOfGold += grid[currX][currY];
            }

            currX += dx[dir];
            currY += dy[dir];
        }
    }
    
    return numOfGold;
}

let maxGold = 0;

for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
        let numOfGold = 0;
        for (let k = 0; k < 2 * (n - 1) + 1; k++) {
            // 이전 k까지 구한 금의 개수에
            // 해당 k의 모서리에 존재하는 금의 개수를 더해줍니다.
            numOfGold += getNumOfGoldInBorder(row, col, k);
            
            // 손해를 보지 않으면서 채굴할 수 있는 최대 금의 개수를 저장합니다.
            if (numOfGold * m >= getArea(k)) {
                maxGold = Math.max(maxGold, numOfGold);
            }
        }
    }
}

console.log(maxGold);