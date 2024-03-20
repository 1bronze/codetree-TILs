const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const answer = Array.from(Array(n), () => Array(m).fill(0));
const visited = Array.from(Array(n), () => Array(m).fill(false));

function canGo(newX, newY) {
	// 나아가려는 위치가 직사각형 안에 들어 있는지 확인하고
	// 들어있다면 아직 방문한적이 없는 곳인지 판단합니다.
    return 0 <= newX && newX < n &&
        0 <= newY && newY < m && !visited[newX][newY];
}

// direction에 따라 바뀌는 (x, y)의 변화량인 dx, dy를 정의합니다.
const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
let currX = 0, currY = 0; // 시작은 (0, 0) 입니다.
let direction = 0;         // 0: 오른쪽, 1: 아래쪽, 2: 왼쪽, 3: 위쪽

// 처음 시작 위치에 초기값을 적습니다.
answer[currX][currY] = 'A';
visited[currX][currY] = true;

// n*m개의 알파벳을 적어야 합니다.
for (let i = 1; i < n * m; i++) { // i번째 문자를 어디에 적을지 결정합니다.
    while (true) {           // 나아갈 수 있을때까지 방향을 바꿔가며 확인해봅니다.
        // 현재 방향 dir를 기준으로 그 다음 위치 값을 계산합니다.
        const nextX = currX + dx[direction], nextY = currY + dy[direction];
        // 그 위치로 나아갈 수 있는지 확인합니다.
        if (canGo(nextX, nextY)) {
            // 나아갈 수 있다면 위치를 갱신해주고 배열에 올바른 값을 채워넣습니다.
            currX = nextX;
            currY = nextY;
            visited[currX][currY] = true;
            answer[currX][currY] = String.fromCharCode((i % 26) + 'A'.charCodeAt(0));
            break;
        } else {
            // 나아갈 수 없다면 시계방향으로 90도를 회전하여 
			// 그 다음 방향을 확인해봐야 합니다.
            direction = (direction + 1) % 4;
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