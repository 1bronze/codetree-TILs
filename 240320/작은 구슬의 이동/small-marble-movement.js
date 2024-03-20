const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, t] = input[0].split(' ').map(Number);
let [x, y, cDir] = input[1].split(' ');

// 각 알파벳 별 방향 번호를 설정합니다.
const mapper = {
    'R': 0,
    'D': 1,
    'U': 2,
    'L': 3
};
x = Number(x) - 1; 
y = Number(y) - 1; 
let moveDir = mapper[cDir];

const dx = [0, 1, -1, 0];
const dy = [1, 0, 0, -1];


function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}


// simulation 진행
for (let i = 0; i < t; i++) {
    const nx = x + dx[moveDir];
    const ny = y + dy[moveDir];
    // 범위 안에 들어온다면 그대로 진행합니다.
    if (inRange(nx, ny)) {
        x = nx; 
        y = ny;
    // 벽에 부딪힌다면, 방향을 바꿔줍니다.
    } else {
        moveDir = 3 - moveDir;
    }
}

console.log(x + 1, y + 1);