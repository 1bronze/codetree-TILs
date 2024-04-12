const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
let [n, currX, currY] = input[0].split(' ').map(Number);
let a = [0].concat(input.slice(1, 1 + n).map(line => [0].concat(line.split(' ').map(Number))));

// 방문하게 되는 숫자들을 담을 곳입니다.
const visitedNums = [];

// 범위가 격자 안에 들어가는지 확인합니다.
function inRange(x, y) {
    return 1 <= x && x <= n && 1 <= y && y <= n;
}

// 범위가 격자 안이고, 해당 위치의 값이 더 큰지 확인합니다.
function canGo(x, y, currNum) {
    return inRange(x, y) && a[x][y] > currNum;
}

// 조건에 맞춰 움직여봅니다.
// 움직였다면 true를 반환하고
// 만약 움직일 수 있는 곳이 없었다면 false를 반환합니다.
function simulate() {
    const dx = [-1, 1,  0, 0];
    const dy = [0, 0, -1, 1];

    // 각각의 방향에 대해 나아갈 수 있는 곳이 있는지 확인합니다.
    for (let i = 0; i < 4; i++) {
        const nextX = currX + dx[i];
        const nextY = currY + dy[i];

        // 갈 수 있는 곳이라면
        // 이동하고 true를 반환합니다.
        if (canGo(nextX, nextY, a[currX][currY])) {
            currX = nextX;
            currY = nextY;
            return true;
        }
    }

    // 움직일 수 있는 곳이 없었다는 의미로
    // false 값을 반환합니다.
    return false;
}

// 초기 위치에 적혀있는 값을 답에 넣어줍니다.
visitedNums.push(a[currX][currY]);

while (true) {
    // 조건에 맞춰 움직여봅니다.
    const greaterNumberExist = simulate();

    // 인접한 곳에 더 큰 숫자가 없다면 종료합니다.
    if (!greaterNumberExist)
        break;
    
    // 움직이고 난 후의 위치를 답에 넣어줍니다.
    visitedNums.push(a[currX][currY]);
}

// 출력:
console.log(visitedNums.join(' '));