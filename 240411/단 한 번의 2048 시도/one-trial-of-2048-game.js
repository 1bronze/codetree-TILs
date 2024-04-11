const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const grid = input.slice(0, 4).map(line => line.split(' ').map(Number));
const d = input[4];

// 변수 선언 및 입력
const NONE = -1;
const n = 4;
const nextGrid = Array.from(Array(n), () => Array(n).fill(0));

// grid를 시계방향으로 90' 회전시킵니다.
function rotate() {
    // nextGrid를 0으로 초기화합니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            nextGrid[i][j] = 0;
        }
    }

    // 90' 회전합니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            nextGrid[i][j] = grid[n - j - 1][i];
        }
    }

    // nextGrid를 grid에 옮겨줍니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            grid[i][j] = nextGrid[i][j];
        }
    }
};

// 아래로 숫자들을 떨어뜨립니다.
function drop() {
    // nextGrid를 0으로 초기화합니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            nextGrid[i][j] = 0;
        }
    }

    // 아래 방향으로 떨어뜨립니다.
    for (let j = 0; j < n; j++) {
        let keepNum = NONE, nextRow = n - 1;

        for (let i = n - 1; i >= 0; i--) {
            if (!grid[i][j]) continue;

            if (keepNum === NONE) {
                keepNum = grid[i][j];
            } else if (keepNum === grid[i][j]) {
                nextGrid[nextRow][j] = keepNum * 2;
                keepNum = NONE;
                nextRow -= 1;
            } else {
                nextGrid[nextRow][j] = keepNum;
                keepNum = grid[i][j];
                nextRow -= 1;
            }
        }

        if (keepNum !== NONE) {
            nextGrid[nextRow][j] = keepNum;
            nextRow -= 1;
        }
    }

    // nextGrid를 grid에 옮겨줍니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            grid[i][j] = nextGrid[i][j];
        }
    }
};

// move_dir 방향으로 기울이는 것을 진행합니다.
function tilt(moveDir) {
    // Step 1.
    for (let i = 0; i < moveDir; i++) {
        rotate();
    }

    // Step 2.
    drop();

    // Step 3.
    for (let i = 0; i < 4 - moveDir; i++) {
        rotate();
    }
};

const dirChar = input[n];
const dirMapper = {
    'D': 0,
    'R': 1,
    'U': 2,
    'L': 3
};

// 기울입니다.
tilt(dirMapper[dirChar]);

for (let i = 0; i < n; i++) {
    console.log(grid[i].join(" "));
}