const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const SHIFT_RIGHT = 0;
const SHIFT_LEFT = 1;

// 변수 선언 및 입력
const [n, m, q] = input[0].split(' ').map(Number);
const a = [0].concat(input.slice(1, 1 + n).map(line => [0].concat(line.split(" "))));
const c = input.slice(1 + n, 1 + n + q).map(line => line.split(" "));

// row 줄의 원소들을 dir 방향에 따라 한 칸 밀어줍니다.
// dir이 0인 경우 오른쪽으로
// dir이 1인 경우 왼쪽으로 밀어야 합니다.
function shift(row, dir) {
    // 오른쪽으로 밀어야 하는 경우
    if (dir === SHIFT_RIGHT) {
        let temp = a[row][m];
        for(let col = m; col >= 2; col--)
            a[row][col] = a[row][col - 1];
        a[row][1] = temp;
    } else {
        let temp = a[row][1];
        for(let col = 1; col <= m - 1; col++)
            a[row][col] = a[row][col + 1];
        a[row][m] = temp;
    }
}

// row1, row2 행에 대해 같은 열에 같은 숫자를 갖는 경우가
// 있는지를 찾아줍니다.
function hasSameNumber(row1, row2) {
    for(let col = 1; col <= m; col++)
        if(a[row1][col] == a[row2][col])
            return true;
    
    return false;
}

// 주어진 방향으로부터 반대 방향의 값을 반환합니다.
function flip(dir) {
    return dir === SHIFT_LEFT ? SHIFT_RIGHT : SHIFT_LEFT;
}

// 조건에 맞춰 움직여봅니다.
// dir이 SHIFT_RIGHT 인 경우 오른쪽으로
// dir이 SHIFT_LEFT 인 경우 왼쪽으로 밀어야 합니다.
function simulate(startRow, startDir) {
    // Step1
    // 바람이 처음으로 불어 온 행의 숫자들을 해당 방향으로 밀어줍니다.
    shift(startRow, startDir);
    
    // 그 이후부터는 반전된 방향에 영향을 받으므로, 방향을 미리 반전 시켜줍니다.
    startDir = flip(startDir);
    
    // Step2
    // 위 방향으로 전파를 계속 시도해봅니다.
    for(let row = startRow, dir = startDir; row >= 2; row--) {
        // 인접한 행끼리 같은 숫자를 가지고 있다면
        // 위의 행을 한 칸 shift하고
        // 방향을 반대로 바꿔 계속 전파를 진행합니다.
        if(hasSameNumber(row, row - 1)) {
            shift(row - 1, dir);
            dir = flip(dir);
        }
        // 같은 숫자가 없다면 전파를 멈춥니다.
        else
            break;
    }

    // Step3
    // 아래 방향으로 전파를 계속 시도해봅니다.
    for(let row = startRow, dir = startDir; row <= n - 1; row++) {
        // 인접한 행끼리 같은 숫자를 가지고 있다면
        // 아래 행을 한 칸 shift하고
        // 방향을 반대로 바꿔 계속 전파를 진행합니다.
        if(hasSameNumber(row, row + 1)) {
            shift(row + 1, dir);
            dir = flip(dir);
        }
        // 같은 숫자가 없다면 전파를 멈춥니다.
        else
            break;
    }
}

c.forEach(([r, d]) => {
    // 조건에 맞춰 움직여봅니다.
    simulate(Number(r), d === 'L' ? SHIFT_RIGHT : SHIFT_LEFT)
});


// 출력
for (let row = 1; row <= n; row++) {
    console.log(a[row].slice(1).join(' '));
}