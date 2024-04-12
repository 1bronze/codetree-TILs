const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m, K] = input.shift().split(' ').map(Number);
const apple = Array.from(Array(n + 1), () => Array(n + 1).fill(false));
// 뱀은 처음에 (1, 1)에서 길이 1의 상태로 있습니다.
let snake = [{x: 1, y: 1}];

// 입력으로 주어진 방향을 정의한 dx, dy에 맞도록
// 변환하는데 쓰이는 객체를 정의합니다.
const mapper = {
    'D': 0,
    'U': 1,
    'R': 2,
    'L': 3
};

let ans = 0;


// (x, y)가 범위 안에 들어가는지 확인합니다.
function canGo(x, y) {
    return 1 <= x && x <= n && 1 <= y && y <= n;
}

// 뱀이 꼬였는지 확인합니다.
function isTwisted(newHead) {
    return snake.some(part => part.x === newHead.x && part.y === newHead.y);
}

// 새로운 머리를 추가합니다.
function pushFront(newHead) {
    // 몸이 꼬이는 경우
    // false를 반환합니다.
    if (isTwisted(newHead)) {
        return false;
    }
    
    // 새로운 머리를 추가합니다.
    snake.unshift(newHead);
    
    // 정상적으로 머리를 추가했다는 의미로
    // True를 반환합니다.
    return true;
}

// 꼬리를 지웁니다.
function popBack() {
    snake.pop();
}

// (nx, ny)쪽으로 뱀을 움직입니다.
function moveSnake(nx, ny) {
    // 머리가 이동할 자리에 사과가 존재하면
    // 사과는 사라지게 되고
    if (apple[nx][ny]) {
        apple[nx][ny] = false;
        // 꼬리는 사라지지 않고 머리만 늘어납니다.
        // 늘어난 머리 때문에 몸이 꼬이게 된다면
        // False를 반환합니다.
        if (!pushFront({x: nx, y: ny})) {
            return false;
        }
    } else {
        // 사과가 없으면 꼬리는 사라지게 되고
        popBack();
        
        // 머리는 늘어나게 됩니다.
        // 늘어난 머리 때문에 몸이 꼬이게 된다면
        // False를 반환합니다.
        if (!pushFront({x: nx, y: ny})) {
            return false;
        }
    }
    
    // 정상적으로 뱀이 움직였으므로
    // True를 반환합니다.
    return true;
}

// 뱀을 moveDir 방향으로 num번 움직입니다.
function move(moveDir, num) {
    const dxs = [1, -1, 0, 0], dys = [0, 0, 1, -1];
    
    // num 횟수만큼 뱀을 움직입니다.
    // 한 번 움직일 때마다 답을 갱신합니다.
    for (let i = 0; i < num; i++) {
        ans += 1;
        
        // 뱀의 머리가 그다음으로 움직일
        // 위치를 구합니다.
        const {x: headX, y: headY} = snake[0];
        const nx = headX + dxs[moveDir];
        const ny = headY + dys[moveDir];
        
        // 그 다음 위치로 갈 수 없다면
        // 게임을 종료합니다.
        if (!canGo(nx, ny)) {
            return false;
        }
        
        // 뱀을 한 칸 움직입니다.
        // 만약 몸이 꼬인다면 False를 반환합니다.
        if (!moveSnake(nx, ny)) {
            return false;
        }
    }
    
    // 정상적으로 명령을 수행했다는 의미인 True를 반환합니다.
    return true;
}

// 사과가 있는 위치를 표시합니다.
for (let i = 0; i < m; i++) {
    const [x, y] = input.shift().split(' ').map(Number);
    apple[x][y] = true;
}

// K개의 명령을 수행합니다.
for (let i = 0; i < K; i++) {
    // moveDir 방향으로 num 횟수 만큼 움직여야 합니다.
    let [moveDir, num] = input.shift().split(' ');
    num = parseInt(num);
    
    // 움직이는 도중 게임이 종료되었을 경우
    // 더 이상 진행하지 않습니다.
    if (!move(mapper[moveDir], num)) {
        break;
    }
}

console.log(ans);