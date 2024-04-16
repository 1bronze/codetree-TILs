const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let idx = 0;
const t = Number(input[idx++]);

const MAX_N = 50;
let [n, m] = [0, 0];
let marbles = [];
let marbleCnt = Array.from(Array(MAX_N + 1), () => Array(MAX_N + 1).fill(0));

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

// 해당 구슬이 1초 후에 어떤 위치에서 어떤 방향을 보고 있는지를 구해
// 그 상태를 반환합니다.
function move(marble) {
    // 구슬이 벽에 부딪혔을 때의 처리를 간단히 하기 위해
    // dir 기준 0, 3이 대칭 1, 2가 대칭이 되도록 설정합니다.
    const dx = [-1, 0, 0, 1], dy = [0, 1, -1, 0];
    let [x, y, moveDir] = marble;
    
    // 바로 앞에 벽이 있는지를 판단합니다.
    const nx = x + dx[moveDir], ny = y + dy[moveDir];
    
    // Case 1 : 벽이 없는 경우에는 그대로 한 칸 전진합니다.
    if (inRange(nx, ny, n)) {
        return [nx, ny, moveDir];
    } 
    // Case 2 : 벽이 있는 경우에는 방향을 반대로 틀어줍니다.
    // 위에서 dx, dy를 move_dir 기준 0, 3이 대칭 1, 2가 대칭이 되도록
    // 설정해놨기 때문에 간단하게 처리가 가능합니다.
    else {
        return [x, y, 3 - moveDir];
    }
}

// 구슬을 전부 한 번씩 움직여봅니다.
function moveAll() {
    marbles = marbles.map(marble => move(marble));
}

// 해당 구슬과 충돌이 일어나는 구슬이 있는지 확인합니다.
// 이를 위해 자신의 현재 위치에 놓은 구슬의 개수가
// 자신을 포함하여 2개 이상인지 확인합니다.
function duplicateMarbleExist(targetIdx) {
    const [targetX, targetY] = marbles[targetIdx];
    return marbleCnt[targetX][targetY] >= 2;
}

// 충돌이 일어나는 구슬을 전부 지워줍니다.
function removeDuplicateMarbles() {
    // Step2-1 : 각 구슬의 위치에 count를 증가 시킵니다.
    marbles.forEach(([x, y]) => marbleCnt[x][y] += 1);

    // Step2-2 : 충돌이 일어나지 않은 구슬만 전부 기록합니다.
    const remainingMarbles = marbles.filter((_, i) => !duplicateMarbleExist(i));

    // Step2-3 : 나중을 위해 각 구슬의 위치에 적어놓은 count 수를 다시 초기화합니다.
    marbles.forEach(([x, y]) => marbleCnt[x][y] -= 1);
    
    // Step2-4 : 충돌이 일어나지 않은 구슬들로 다시 채워줍니다.
    marbles = remainingMarbles;
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
    // 새로운 테스트 케이스가 시작될때마다 기존에 사용하던 값들을 초기화해줍니다.
    marbles = [];

    // 입력
    [n, m] = input[idx++].split(' ').map(Number);
    for (let i = 0; i < m; i++) {
        let [x, y, d] = input[idx++].split(' ');
        [x, y] = [Number(x), Number(y)];
        marbles.push([x, y, mapper[d]]);
    }
    
    // 2 * n번 이후에는 충돌이 절대 일어날 수 없으므로
    // 시뮬레이션을 총 2 * n번 진행합니다.
    for (let i = 0; i < 2 * n; i++)
        simulate();
    
    // 출력
    console.log(marbles.length);
}