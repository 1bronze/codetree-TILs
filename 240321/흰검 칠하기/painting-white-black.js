const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MAX_K = 100000;
// 변수 선언 및 입력
let n = Number(input[0]);
let a = Array(2 * MAX_K + 1).fill(0);
let cntB = Array(2 * MAX_K + 1).fill(0);
let cntW = Array(2 * MAX_K + 1).fill(0);
let b = 0, w = 0, g = 0;

let cur = MAX_K;
for (let i = 1; i <= n; i++) {
    let [x, c] = input[i].split(' ');
    x = Number(x);

    if (c === 'L') {
        // x칸 왼쪽으로 칠합니다.
        while (x > 0) {
            a[cur] = 1;
            cntW[cur] += 1;
            x -= 1;

            if (x) {
                cur -= 1;
            }
        }
    } else {
        // x칸 오른쪽으로 칠합니다.
        while (x > 0) {
            a[cur] = 2;
            cntB[cur] += 1;
            x -= 1;

            if (x) {
                cur += 1;
            }
        }
    }
}

for (let i = 0; i < 2 * MAX_K + 1; i++) {
    // 검은색과 흰색으로 두 번 이상 칠해진 타일은 회색입니다.
    if (cntB[i] >= 2 && cntW[i] >= 2) {
        g += 1;
    }
    // 그렇지 않으면 현재 칠해진 색깔이 곧 타일의 색깔입니다.
    else if (a[i] === 1) {
        w += 1;
    } else if (a[i] === 2) {
        b += 1;
    }
}

// 정답을 출력합니다.
console.log(`${w} ${b} ${g}`);