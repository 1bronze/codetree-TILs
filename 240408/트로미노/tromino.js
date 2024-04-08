const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// 가능한 모든 모양을 전부 적어줍니다.
const shapes = [
    [[1, 1, 0],
    [1, 0, 0],
    [0, 0, 0]],

    [[1, 1, 0],
    [0, 1, 0],
    [0, 0, 0]],

    [[1, 0, 0],
    [1, 1, 0],
    [0, 0, 0]],

    [[0, 1, 0],
    [1, 1, 0],
    [0, 0, 0]],

    [[1, 1, 1],
    [0, 0, 0],
    [0, 0, 0]],

    [[1, 0, 0],
    [1, 0, 0],
    [1, 0, 0]],
];

// 주어진 위치에 대하여 가능한 모든 모양을 탐색하며 최대 합을 반환합니다.
function getMaxSum(x, y) {
    let maxSum = 0;
    for (let i = 0; i < 6; i++) {
        let isPossible = true;
        let sumOfNums = 0;
        for (let dx = 0; dx < 3; dx++) {
            for (let dy = 0; dy < 3; dy++) {
                if (shapes[i][dx][dy] === 0) {
                    continue;
                }
                if (x + dx >= n || y + dy >= m) {
                    isPossible = false;
                } else {
                    sumOfNums += grid[x + dx][y + dy];
                }
            }
        }
        
        if (isPossible) {
            maxSum = Math.max(maxSum, sumOfNums);
        }
    }

    return maxSum;
}

let ans = 0;

// 격자의 각 위치에 대하여 탐색하여줍니다.
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        ans = Math.max(ans, getMaxSum(i, j));
    }
}

console.log(ans);