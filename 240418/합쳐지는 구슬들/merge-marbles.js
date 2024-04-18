const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const BLANK = 0;
const dy = [-1, 0, 0, 1];
const dx = [0, 1, -1, 0];

const mapper = {
    'U': 0,
    'R': 1,
    'L': 2,
    'D': 3,
}

const [n, m, t] = input[0].split(' ').map(Number);
const marbles = [0];
const grid = Array.from(Array(n + 1), () => Array(n + 1).fill(BLANK));
const nextGrid = Array.from(Array(n + 1), () => Array(n + 1).fill(BLANK));

function inRange(y, x) {
    return 1 <= y && y <= n && 1 <= x && x <= n;
}

function resolveCollision(y, x, marble, targetMarble) {
    // 충돌 시 무게는 두 구슬의 합이 된다.
    let newWeight = marble.w + targetMarble.w;
    let newIndex = Math.max(marble.i, targetMarble.i);
    let newDirection = (newIndex === marble.i) ? marble.d : targetMarble.d;

    // 구슬 정보를 업데이트한다.
    marbles[newIndex].w = newWeight;
    marbles[newIndex].d = newDirection;

    nextGrid[y][x] = newIndex;
}

function move(y, x, marbleIdx) {
    // 찾은 구슬의 정보를 가져온다.
    let marble = marbles[marbleIdx];
    
    // 구슬이 다음으로 이동할 위치를 찾는다.
    let ny = y + dy[marble.d];
    let nx = x + dx[marble.d];

    // 다음 위치가 범위 밖이면
    if (!inRange(ny, nx)) {
        // 방향을 바꾸고 움직이는 것을 마친다.
        marble.d = 3 - marble.d;

        if (nextGrid[y][x] === BLANK) {
            nextGrid[y][x] = marbleIdx;
        } else {
            let targetMarble = marbles[nextGrid[y][x]];
            resolveCollision(y, x, marble, targetMarble);
        }
        return;
    }

    // 다음 위치가 비어 있으면
    if (nextGrid[ny][nx] === BLANK) {
        // 다음 위치로 이동한다.
        nextGrid[ny][nx] = marbleIdx;
    } 
    // 다음 위치에 이미 다른 구슬이 존재하면
    else {
        let targetMarble = marbles[nextGrid[ny][nx]];
        // 충돌을 해결하면서 움직인다.
        resolveCollision(ny, nx, marble, targetMarble);
    }
}

function simulate() {
    // 구슬이 있는 곳을 모두 찾아다니면서
    for (let y = 1; y <= n; y++) {
        for (let x = 1; x <= n; x++) {
            if (grid[y][x] === BLANK) continue;

            // 구슬을 이동시킨다.
            const marbleIdx = grid[y][x];
            move(y, x, marbleIdx);
        }
    }

    for (let y = 1; y <= n; y++) {
        for (let x = 1; x <= n; x++) {
            grid[y][x] = nextGrid[y][x];
            nextGrid[y][x] = BLANK;
        }
    }
}

for (let i = 1; i <= m; i++) {
    let [r, c, d, w] = input[i].split(' ');

    [r, c, w] = [r, c, w].map(Number);
    d = mapper[d];

    grid[r][c] = i;
    marbles.push({
        i: i,
        d: d,
        w: w
    });
}

for (let i = 1; i <= t; i++)
    simulate();

let cnt = 0;
let largeWeight = 0;
for (let y = 1; y <= n; y++) {
    for (let x = 1; x <= n; x++) {
        if (grid[y][x] === BLANK) continue;

        cnt++;
        largeWeight = Math.max(largeWeight, marbles[grid[y][x]].w);
    }
}

console.log(cnt, largeWeight);