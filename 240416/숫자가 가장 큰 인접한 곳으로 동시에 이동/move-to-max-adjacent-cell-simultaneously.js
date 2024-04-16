const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');


// 변수 선언 및 입력
const [n, m, t] = input[0].split(' ').map(Number);
const a = [0].concat(input.slice(1, 1 + n).map(line => [0].concat(line.trim().split(' ').map(Number))));
const count = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
const nextCount = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

// 범위가 격자 안에 들어가는지 확인합니다.
function inRange(x, y) {
    return 1 <= x && x <= n && 1 <= y && y <= n;
}

// 인접한 곳들 중 가장 값이 큰 위치를 반환합니다.
function getMaxNeighborPos(currX, currY) {
    // 코딩의 간결함을 위해 
    // 문제 조건에 맞게 상하좌우 순서로
    // 방향을 정의합니다.
    const dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];
    
    let maxNum = 0, maxPos = [0, 0];
    
    // 각각의 방향에 대해 나아갈 수 있는 곳이 있는지 확인합니다.
    for (let i = 0; i < dx.length; i++) {
        const nextX = currX + dx[i], nextY = currY + dy[i];
        
        // 범위안에 들어오는 격자 중 최댓값을 갱신합니다.
        if (inRange(nextX, nextY) && a[nextX][nextY] > maxNum) {
            maxNum = a[nextX][nextY];
            maxPos = [nextX, nextY];
        }
    }
    
    return maxPos;
}

// (x, y) 위치에 있는 구슬을 움직입니다.
function move(x, y) {
    // 인접한 곳들 중 가장 값이 큰 위치를 계산합니다.
    const [nextX, nextY] = getMaxNeighborPos(x, y);
    
    // 그 다음 위치에 구슬의 개수를 1만큼 추가해줍니다.
    nextCount[nextX][nextY] += 1;
}

// 구슬을 전부 한 번씩 움직여 봅니다.
function moveAll() {
    // 그 다음 각 위치에서의 구슬 개수를 전부 초기화해놓습니다.
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            nextCount[i][j] = 0;
        }
    }
    
    // (i, j) 위치에 구슬이 있는경우 
    // 움직임을 시도해보고, 그 결과를 전부 nextCount에 기록합니다.
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (count[i][j] === 1) {
                move(i, j);
            }
        }
    }
    
    // nextCount 값을 count에 복사합니다.
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            count[i][j] = nextCount[i][j];
        }
    }
}

// 충돌이 일어나는 구슬은 전부 지워줍니다.
function removeDuplicateMarbles() {
    // 충돌이 일어난 구슬들이 있는 위치만 빈 곳으로 설정하면 됩니다.
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (count[i][j] >= 2) {
                count[i][j] = 0;
            }
        }
    }
}

// 조건에 맞춰 시뮬레이션을 진행합니다.
function simulate() {
    // Step1
    // 구슬을 전부 한 번씩 움직여 봅니다.
    moveAll();
    
    // Step2
    // 움직임 이후에 충돌이 일어나는 구슬들을 골라 목록에서 지워줍니다.
    removeDuplicateMarbles();
}

// 초기 count 배열을 설정합니다.
// 구슬이 있는 곳에 1을 표시합니다.
input.slice(1 + n, 1 + n + m).forEach(line => {
    const [x, y] = line.split(' ').map(Number);
    count[x][y] = 1;
});

// t초 동안 시뮬레이션을 진행합니다.
for (let i = 0; i < t; i++) {
    simulate();
}

// 출력:
let ans = 0;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        ans += count[i][j];
    }
}

console.log(ans);