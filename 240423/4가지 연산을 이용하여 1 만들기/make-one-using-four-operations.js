const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const SUBTRACT = 0;
const ADD = 1;
const DIV2 = 2;
const DIV3 = 3;

let n = Number(input);
let ans = Number.MAX_SAFE_INTEGER;

// num이라는 값에 해당 operator를 사용할 수 있는지를 판단합니다.
// 2로 나누거나 3으로 나누려는 경우 num이 해당 값으로 나누어 떨어질 때에만
// 해당 연산을 사용 가능합니다.
function possible(num, op) {
    if (op === SUBTRACT || op === ADD) {
        return true;
    } else if (op === DIV2) {
        return num % 2 === 0;
    } else {
        return num % 3 === 0;
    }
}

// num에 op 연산을 수행했을 때의 결과를 반환합니다.
function calculate(num, op) {
    if (op === SUBTRACT) {
        return num - 1;
    } else if (op === ADD) {
        return num + 1;
    } else if (op === DIV2) {
        return Math.floor(num / 2);
    } else {
        return Math.floor(num / 3);
    }  
}

// 모든 가지수를 다 조사해보며 최소 연산 횟수를 계산합니다.
function findMin(num, cnt) {
    // 1이 되었을 경우 답이랑 비교하여 갱신합니다.
    if (num === 1) {
        ans = Math.min(ans, cnt);
        return;
    }
    
    // 답은 최대 n - 1을 넘을수는 없으므로
    // 더 이상 탐색을 진행하지 않습니다.
    if (cnt >= n - 1) {
        return;
    }

    // 4가지의 연산을 시도해 봅니다.
    // 해당 연산을 쓸 수 있는 경우에만
    // 더 탐색을 진행합니다.
    for (let i = 0; i < 4; i++) {
        if (possible(num, i)) {
            findMin(calculate(num, i), cnt + 1);
        }
    }
}

// 모든 가지수를 다 조사해보며 최소 연산 횟수를 계산합니다.
findMin(n, 0);
console.log(ans);