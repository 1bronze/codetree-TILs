const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const answer = Array.from(Array(n), () => Array(m).fill(0));

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < m;
}

const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
let x = 0, y = 0; // 시작은 (0, 0) 입니다.
let dirNum = 1; // 0: 오른쪽, 1: 아래쪽, 2: 왼쪽, 3: 위쪽

// 처음 시작 위치에 초기값을 적습니다.
answer[x][y] = 1;

// n*m번 진행합니다.
for (let i = 2; i <= n * m; i++) {
    // 나아갈 수 있을때까지 방향을 바꿔가며 확인해봅니다.
    while (true) {           
        // 현재 방향 dir를 기준으로 그 다음 위치 값을 계산합니다.
        const nx = x + dx[dirNum], ny = y + dy[dirNum];
        
        // 그 위치로 나아갈 수 있는지 확인합니다.
        if (inRange(nx, ny) && answer[nx][ny] === 0) {
            // 나아갈 수 있다면 위치를 갱신해주고 배열에 올바른 값을 채워넣습니다.
            x = nx;
            y = ny;
            answer[x][y] = i;
            break;
        } else {
            // 나아갈 수 없다면 반시계방향으로 90도를 회전하여 
            // 그 다음 방향을 확인해봐야 합니다.
            dirNum = (dirNum + 3) % 4;
        }
    }
}

// 출력:
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < m; j++) {
        row += `${answer[i][j]} `;
    }
    console.log(row);
}