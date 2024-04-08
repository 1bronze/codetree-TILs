const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// 주어진 k에 대하여 마름모의 넓이를 반환합니다.
function getArea(k) {
    return k * k + (k + 1) * (k + 1);
}

// 주어진 좌표가 격자에 포함되는지 여부를 반환합니다.
function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

// 주어진 k에 대하여 채굴 가능한 금의 개수를 반환합니다.
function getNumOfGold(row, col, k) {
    let numOfGold = 0;
    const dx = [1, 1, -1, -1], dy = [-1, 1, 1, -1];
    
    numOfGold += grid[row][col]; // k = 0 일 때 처리
    
    for (let currK = 1; currK <= k; currK++) {
        let currX = row - currK, currY = col; // 순회 시작점 설정
        for (let dir = 0; dir < 4; dir++) {
            for (let step = 0; step < currK; step++) {
                if (inRange(currX, currY)) {
                    numOfGold += grid[currX][currY];
                }
                
                currX += dx[dir];
                currY += dy[dir];
            }
        }
    }
    
    return numOfGold;
}

let maxGold = 0;

// 격자의 각 위치가 마름모의 중앙일 때 채굴 가능한 금의 개수를 구합니다.
for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
        for (let k = 0; k < 2 * (n - 1) + 1; k++) {
            const numOfGold = getNumOfGold(row, col, k);
            
            // 손해를 보지 않으면서 채굴할 수 있는 최대 금의 개수를 저장합니다.
            if (numOfGold * m >= getArea(k)) {
                maxGold = Math.max(maxGold, numOfGold);
            }
        }
    }
}

console.log(maxGold);