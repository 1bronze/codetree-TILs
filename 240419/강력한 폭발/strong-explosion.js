const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const bombType = Array.from(Array(n), () => Array(n).fill(0));
const bombed = Array.from(Array(n), () => Array(n).fill(false));

let ans = 0;
const bombPos = [];

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function bomb(x, y, bType) {
    // 폭탄 종류마다 터질 위치를 미리 정의합니다.
    const bombShapes = [
        [],
        [[-2, 0], [-1, 0], [0, 0], [1, 0], [2, 0]],
        [[-1, 0], [1, 0], [0, 0], [0, -1], [0, 1]],
        [[-1, -1], [-1, 1], [0, 0], [1, -1], [1, 1]]
    ];

    // 격자 내 칸에 대해서만 영역을 표시합니다.
    for (let i = 0; i < 5; i++) {
        const [dx, dy] = bombShapes[bType][i];
        const [nx, ny] = [x + dx, y + dy];
        if (inRange(nx, ny)) {
            bombed[nx][ny] = true;
        }
    }
}

function calc() {
    // Step1. 폭탄이 터진 위치를 표시하는 배열을 초기화합니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            bombed[i][j] = false;
        }
    }

    // Step2. 각 폭탄의 타입에 따라 초토화 되는 영역을 표시합니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (bombType[i][j]) {
                bomb(i, j, bombType[i][j]);
            }
        }
    }

    // Step3. 초토화된 영역의 수를 구합니다.
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (bombed[i][j]) {
                cnt += 1;
            }
        }
    }

    return cnt;
}

function findMaxArea(cnt) {
    if (cnt === bombPos.length) {
        ans = Math.max(ans, calc());
        return;
    }

    for (let i = 1; i <= 3; i++) {
        const [x, y] = bombPos[cnt];
        bombType[x][y] = i;
        findMaxArea(cnt + 1);
        bombType[x][y] = 0;
    }
}

for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
        if (grid[i][j] === 1)
            bombPos.push([i, j]);

findMaxArea(0);

console.log(ans);