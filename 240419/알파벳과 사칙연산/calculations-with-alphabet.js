const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MIN = Number.MIN_SAFE_INTEGER;

// 변수 선언 및 입력
const n = 6;
const expression = input[0];
const num = Array(n).fill(0);
let ans = INT_MIN;

function conv(idx) {
    return num[expression.charCodeAt(idx) - 'a'.charCodeAt(0)];
}

function calc() {
    const length = expression.length;
    let value = conv(0);
    for (let i = 2; i < length; i += 2) {
        if (expression[i - 1] === '+') {
            value += conv(i);
        } else if (expression[i - 1] === '-') {
            value -= conv(i);
        } else {
            value *= conv(i);
        }
    }
    return value;
}

// 'a'부터 'f'까지 순서대로
// 0부터 5번째 index까지의 값을
// 1~4 중에 하나로 채웁니다.
function findMax(cnt) {
    if (cnt === n) {
        ans = Math.max(ans, calc());
        return;
    }

    for (let i = 1; i < 5; i++) {
        num[cnt] = i;
        findMax(cnt + 1);
    }
}

findMax(0);
console.log(ans);