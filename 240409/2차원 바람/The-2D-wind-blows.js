const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m, q] = input[0].split(" ").map(Number);
const a = [0].concat(input.slice(1, 1 + n).map(line => [0].concat(line.split(" ").map(Number))));
const c = input.slice(1 + n, 1 + n + q).map(line => line.split(" ").map(Number));
const tempArr = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

// 직사각형의 경계에 있는 숫자들을 시계 방향으로 한 칸씩 회전해줍니다.
function rotate(startRow, startCol, endRow, endCol) {
    // Step1-1. 직사각형 가장 왼쪽 위 모서리 값을 temp에 저장합니다.
    const temp = a[startRow][startCol];

    // Step1-2. 직사각형 가장 왼쪽 열을 위로 한 칸씩 shift 합니다.
    for (let row = startRow; row < endRow; row++) {
        a[row][startCol] = a[row + 1][startCol];
    }

    // Step1-3. 직사각형 가장 아래 행을 왼쪽으로 한 칸씩 shift 합니다.
    for (let col = startCol; col < endCol; col++) {
        a[endRow][col] = a[endRow][col + 1];
    }

    // Step1-4. 직사각형 가장 오른쪽 열을 아래로 한 칸씩 shift 합니다.
    for (let row = endRow; row > startRow; row--) {
        a[row][endCol] = a[row - 1][endCol];
    }

    // Step1-5. 직사각형 가장 위 행을 오른쪽으로 한 칸씩 shift 합니다.
    for (let col = endCol; col > startCol; col--) {
        a[startRow][col] = a[startRow][col - 1];
    }

    // Step1-6. temp를 가장 왼쪽 위 모서리를 기준으로 바로 오른쪽 칸에 넣습니다.
    a[startRow][startCol + 1] = temp;
}

// 격자를 벗어나는지 판단합니다.
function inRange(x, y) {
    return 1 <= x && x <= n && 1 <= y && y <= m;
}

// x행 y열 (x, y)과 인접한 숫자들과의 평균 값을 계산해줍니다.
// 격자를 벗어나지 않는 숫자들만을 고려해줍니다.
function average(x, y) {
    // 자기 자신의 위치를 포함하여 평균을 내야 하므로
    // dx, dy 방향을 5개로 설정하면 한 번에 처리가 가능합니다.
    const dx = [0, 0, 1, 0, -1];
    const dy = [0, -1, 0, 1, 0];

    const activeNumbers = [];
    for (let i = 0; i < 5; i++) {
        const newX = x + dx[i];
        const newY = y + dy[i];

        if (inRange(newX, newY))
            activeNumbers.push(a[newX][newY]);
    }

    const sum = activeNumbers.reduce((acc, curr) => acc + curr, 0);
    const cnt = activeNumbers.length;
    return Math.floor(sum / cnt);
}

// 직사각형 내 숫자들을 인접한 숫자들과의 평균값으로 바꿔줍니다.
// 동시에 일어나야 하는 작업이므로, 이미 바뀐 숫자에 주위 숫자들이 영향을 받으면 안되기 때문에
// tempArr 배열에 평균 값들을 전부 적어 준 다음, 그 값을 다시 복사해 옵니다.
function setAverage(startRow, startCol, endRow, endCol) {
    // Step2-1. tempArr에 평균 값을 적습니다.
    for (let row = startRow; row <= endRow; row++) {
        for (let col = startCol; col <= endCol; col++) {
            tempArr[row][col] = average(row, col);
        }
    }

    // Step2-2. tempArr 값을 다시 가져옵니다.
    for (let row = startRow; row <= endRow; row++) {
        for (let col = startCol; col <= endCol; col++) {
            a[row][col] = tempArr[row][col];
        }
    }
}

// 조건에 맞춰 값을 바꿔봅니다.
function simulate(startRow, startCol, endRow, endCol) {
    // Step1
    // 직사각형 경계에 있는 숫자들을 시계 방향으로 한 칸씩 회전해줍니다.
    rotate(startRow, startCol, endRow, endCol);

    // Step2
    // 직사각형 내 각각의 숫자들을 인접한 숫자들과의 평균값으로 바꿔줍니다.
    setAverage(startRow, startCol, endRow, endCol);
}

// 조건에 맞춰 값을 바꿔봅니다.
c.forEach(([r1, c1, r2, c2]) => simulate(r1, c1, r2, c2));

// 출력
let result = '';
for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= m; col++) {
        result += `${a[row][col]} `;
    }
    result += '\n';
}
console.log(result);