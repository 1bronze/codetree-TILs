const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const CCW = 0;
const CW = 1;

// 변수 선언 및 입력:
const n = Number(input[0]);
let grid = [];
let temp = Array.from(Array(n), () => Array(n).fill(0));

for (let i = 1; i <= n; i++) {
    grid.push(input[i].split(' ').map(Number));
}

function shift(x, y, k, l, moveDir) {
    let dx, dy, moveNums;
    if (moveDir === CCW) {
        dx = [-1, -1, 1, 1];
        dy = [1, -1, -1, 1];
        moveNums = [k, l, k, l];
    } else {
        dx = [-1, -1, 1, 1];
        dy = [-1, 1, 1, -1];
        moveNums = [l, k, l, k];
    }
    
    // Step1. temp 배열에 grid 값을 복사합니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            temp[i][j] = grid[i][j];
        }
    }

    // Step2. 기울어진 직사각형의 경계를 쭉 따라가면서
    //        숫자를 한 칸씩 밀었을 때의 결과를
    //        temp에 저장합니다.
    moveNums.forEach((moveNum, index) => {
        for (let i = 0; i < moveNum; i++) {
            const nx = x + dx[index];
            const ny = y + dy[index];
            temp[nx][ny] = grid[x][y];
            x = nx;
            y = ny;
        }
    });

    // Step3. temp값을 grid에 옮겨줍니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            grid[i][j] = temp[i][j];
        }
    }
}

const [x, y, m1, m2, m3, m4, d] = input[n + 1].split(' ').map(Number);
shift(x - 1, y - 1, m1, m2, d);

// 출력
let result = '';
for (let i = 0; i < n; i++) {
    result += grid[i].join(' ') + '\n';
}
console.log(result);