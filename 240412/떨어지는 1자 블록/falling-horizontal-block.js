const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.trim().split(' ').map(Number));

// 해당 row에 [colS, colE] 열에
// 전부 블럭이 없는지를 확인합니다.
function allBlank(row, colS, colE) {
    for(let col = colS; col <= colE ; col++)
        if(grid[row][col])
            return false;

    return true;
}

// 최종적으로 도달하게 될 위치는
// 그 다음 위치에 최초로 블럭이 존재하는 순간임을 이용합니다.
function getTargetRow() {
    for (let row = 0; row < n - 1; row++) {
        if (!allBlank(row + 1, k - 1, k + m - 2)) {
            return row;
        }
    }

    return n - 1;
}

// 최종적으로 멈추게 될 위치를 구합니다.
const targetRow = getTargetRow();

// 최종 위치에 전부 블럭을 표시합니다.
for (let col = k - 1; col < k - 1 + m; col++) {
    grid[targetRow][col] = 1;
}

for (let i = 0; i < n; i++) {
    console.log(grid[i].join(' '));
}