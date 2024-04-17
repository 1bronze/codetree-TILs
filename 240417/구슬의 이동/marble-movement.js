const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m, t, k] = input[0].split(' ').map(Number);
let grid = Array.from(Array(n), () => Array.from(Array(n), () => []));
let nextGrid = Array.from(Array(n), () => Array.from(Array(n), () => []));

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function nextPos(x, y, vnum, moveDir) {
    const dx = [-1, 0, 0, 1], dy = [0, 1, -1, 0];

    // vnum 횟수만큼 이동한 이후의 위치를 반환합니다.
    for (let i = 0; i < vnum; i++) {
        let nx = x + dx[moveDir], ny = y + dy[moveDir];
        // 벽에 부딪히면
        // 방향을 바꾼 뒤 이동합니다.
        if (!inRange(nx, ny)) {
            moveDir = 3 - moveDir;
            nx = x + dx[moveDir];
            ny = y + dy[moveDir];
        }
        x = nx;
        y = ny;
    }

    return [x, y, moveDir];
}

function moveAll() {
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            grid[x][y].forEach(([v, num, moveDir]) => {
                const [nextX, nextY, nextDir] = nextPos(x, y, v, moveDir);
                nextGrid[nextX][nextY].push([v, num, nextDir]);
            });
        }
    }
}

function selectMarbles() {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (nextGrid[i][j].length >= k) {
                // 우선순위가 높은 k개만 남겨줍니다.
                nextGrid[i][j].sort((a, b) => b[0] - a[0] || b[1] - a[1]);
                while (nextGrid[i][j].length > k) {
                    nextGrid[i][j].pop();
                }
            }
        }
    }
}

function simulate() {
    // Step1. nextGrid를 초기화합니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            nextGrid[i][j] = [];
        }
    }

    // Step2. 구슬들을 전부 움직입니다.
    moveAll();

    // Step3. 각 칸마다 구슬이 최대 k개만 있도록 조정합니다.
    selectMarbles();

    // Step4. nextGrid 값을 grid로 옮겨줍니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            grid[i][j] = nextGrid[i][j];
        }
    }
}

const dirMapper = {
    "U": 0,
    "R": 1,
    "L": 2,
    "D": 3
};

input.slice(1, 1 + m).map((line, i) => {
    let [r, c, d, v] = line.split(' ');
    [r, c, v] = [r, c, v].map(Number);

    // 살아남는 구슬의 우선순위가 더 빠른 속도, 더 큰 번호 이므로
    // (속도, 방향, 번호) 순서를 유지합니다.
    grid[r - 1][c - 1].push([v, i + 1, dirMapper[d]]);
})

// t초에 걸쳐 시뮬레이션을 반복합니다.
for (let i = 0; i < t; i++) {
    simulate();
}

let ans = 0;
for (y = 0; y < n; y++)
    for (x = 0; x < n; x++)
        if (grid[y][x].length !== 0)
            ans += grid[y][x].length;
console.log(ans);