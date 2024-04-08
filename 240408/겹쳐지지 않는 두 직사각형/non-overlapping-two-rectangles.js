const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MIN = Number.MIN_SAFE_INTEGER;

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const board = Array.from(Array(n), () => Array(m).fill(0));

function clearBoard() {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            board[i][j] = 0;
        }
    }
}

function draw(x1, y1, x2, y2) {
    for (let i = x1; i <= x2; i++) {
        for (let j = y1; j <= y2; j++) {
            board[i][j] += 1;
        }
    }
}

function checkBoard() {
    // 동일한 칸을 2개의 직사각형이 모두 포함한다면
    // 겹치게 됩니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] >= 2) {
                return true;
            }
        }
    }
    return false;
}

// (x1, y1), (x2, y2) 그리고
// (x3, y3), (x4, y4) 로 이루어져있는
// 두 직사각형이 겹치는지 확인하는 함수
function overlapped(x1, y1, x2, y2, x3, y3, x4, y4) {
    clearBoard();
    draw(x1, y1, x2, y2);
    draw(x3, y3, x4, y4);
    return checkBoard();
}

function rectSum(x1, y1, x2, y2) {
    return grid.slice(x1, x2 + 1).reduce((sum, row) => 
        sum + row.slice(y1, y2 + 1).reduce((rowSum, value) => rowSum + value, 0), 0);
}

// 첫 번째 직사각형이 (x1, y1), (x2, y2)를 양쪽 꼭지점으로 할 때
// 두 번째 직사각형을 겹치지 않게 잘 잡아
// 최대 합을 반환하는 함수
function findMaxSumWithRect(x1, y1, x2, y2) {
    let maxSum = INT_MIN;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            for (let k = i; k < n; k++) {
                for (let l = j; l < m; l++) {
                    if (!overlapped(x1, y1, x2, y2, i, j, k, l)) {
                        maxSum = Math.max(maxSum, 
                                           rectSum(x1, y1, x2, y2) + 
                                           rectSum(i, j, k, l));
                    }
                }
            }
        }
    }
    
    return maxSum;
}

// 두 직사각형을 잘 잡았을 때의 최대 합을 반환하는 함수
function findMaxSum() {
    let maxSum = INT_MIN;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            for (let k = i; k < n; k++) {
                for (let l = j; l < m; l++) {
                    maxSum = Math.max(maxSum, findMaxSumWithRect(i, j, k, l));
                }
            }
        }
    }
    
    return maxSum;
}

const ans = findMaxSum();
console.log(ans);