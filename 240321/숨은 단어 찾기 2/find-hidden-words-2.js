const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1, n + 1);

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < m;
}

const dx = [1, 1, 1, -1, -1, -1, 0, 0];
const dy = [-1, 0, 1, -1, 0, 1, -1, 1];

// 모든 좌표에서 다 확인해봅니다.
let cnt = 0;
for (let i = 0; i < n; i++) {
    // 격자를 벗어나지 않을 범위로만 잡습니다.
    for (let j = 0; j < m; j++) {

        if (arr[i][j] != 'L') {
            continue;
        }

        for (let k = 0; k < dx.length; k++) {
            let curt = 1;
            let curx = i;
            let cury = j;
            while (true) {
                const nx = curx + dx[k];
                const ny = cury + dy[k];
                if (!inRange(nx, ny)) {
                    break;
                }
                if (arr[nx][ny] != 'E') {
                    break;
                }
                curt += 1;
                curx = nx;
                cury = ny;
            }

            if (curt >= 3) {
                cnt += 1;
            }
        }
    }
}

console.log(cnt);