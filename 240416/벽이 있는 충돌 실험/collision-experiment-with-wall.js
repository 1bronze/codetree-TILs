const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let idx = 0;
const t = Number(input[idx++]);

const BLANK = -1;
const COLLIDE = -2;
let [n, m] = [0, 0];
let currDir = [];
let nextDir = [];

// 입력으로 주어진 방향을 정의한 dx, dy에 맞도록
// 변환하는데 쓰이는 객체를 정의합니다.
const mapper = {
    'U': 0,
    'R': 1,
    'L': 2,
    'D': 3
};

// 해당 위치가 격자 안에 들어와 있는지 확인합니다.
function inRange(x, y) {
    return 1 <= x && x <= n && 1 <= y && y <= n;
}

// 해당 위치에 dir 방향을 갖는 구슬이 새롭게 추가되는 경우에 대한
// 처리를 합니다.
function updateNextDir(x, y, moveDir) {
    // 빈 곳이었다면 해당 구슬을 넣어주고
    if (nextDir[x][y] === BLANK) {
        nextDir[x][y] = moveDir;
    // 빈 곳이 아니었다면 이미 다른 구슬이 놓여져 있는 것이므로
    // 충돌 표시를 해줍니다.
    } else {
        nextDir[x][y] = COLLIDE;
    }
}


function move(x, y, moveDir) {
    // 구슬이 벽에 부딪혔을 때의 처리를 간단히 하기 위해
    // dir 기준 0, 3이 대칭 1, 2가 대칭이 되도록 설정합니다.
    const dx = [-1, 0, 0, 1], dy = [0, 1, -1, 0];
    
    // 바로 앞에 벽이 있는지를 판단합니다.
    const nx = x + dx[moveDir], ny = y + dy[moveDir];
    
    // Case 1 : 벽이 없는 경우에는 그대로 한 칸 전진합니다.
    // 따라서 그 다음 위치에 같은 방향을 갖는 구슬이 있게 됩니다.
    if (inRange(nx, ny, n)) {
        updateNextDir(nx, ny, moveDir);
    } 
    // Case 2 : 벽이 있는 경우에는 방향을 반대로 틀어줍니다.
    // 따라서 그 다음 위치에 같은 방향을 갖는 구슬이 있게 됩니다.
    else {
        updateNextDir(x, y, 3 - moveDir);
    }
}

// 구슬을 전부 한 번씩 움직여봅니다.
function moveAll() {
    // 그 다음 각 위치에서의 방향들을 전부 초기화 해놓습니다.
    nextDir = Array.from(Array(n + 1), () => Array(n + 1).fill(BLANK));
    
    // (i, j) 위치에 구슬이 있는경우
    // 움직임을 시도해보고, 그 결과를 전부 nextDir에 기록합니다.
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (currDir[i][j] !== BLANK) {
                move(i, j, currDir[i][j]);
            }
        }
    }
    
    // next_dir 값을 다시 currDir에 복사합니다.
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            currDir[i][j] = nextDir[i][j];
        }
    }
}

// 충돌이 일어나는 구슬을 전부 지워줍니다.
function removeDuplicateMarbles() {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (currDir[i][j] === COLLIDE) {
                currDir[i][j] = BLANK;
            }
        }
    }
}

// 조건에 맞춰 시뮬레이션을 진행합니다.
function simulate() {
    // Step1
    // 구슬을 전부 한 번씩 움직여봅니다.
    moveAll();

    // Step2
    // 움직임 이후에 충돌이 일어나는 구슬들을 골라 목록에서 지워줍니다.
    removeDuplicateMarbles();
}

for (let i = 0; i < t; i++) {
    // 입력
    [n, m] = input[idx++].split(' ').map(Number);

    // 새로운 테스트 케이스가 시작될때마다 기존에 사용하던 값들을 초기화해줍니다.
    currDir = Array.from(Array(n + 1), () => Array(n + 1).fill(BLANK));

    for (let i = 0; i < m; i++) {
        const [x, y, d] = input[idx++].split(' ');
        currDir[Number(x)][Number(y)] = mapper[d];
    }
    
    // 2 * n번 이후에는 충돌이 절대 일어날 수 없으므로
    // 시뮬레이션을 총 2 * n번 진행합니다.
    for (let i = 0; i < 2 * n; i++)
        simulate();
    
    // 출력
    let marbleCnt = 0;
    for (let i = 0; i < currDir.length; i++)
        for (let j = 0; j < currDir[i].length; j++)
            if (currDir[i][j] !== BLANK)
               marbleCnt++;
    
    console.log(marbleCnt);
}