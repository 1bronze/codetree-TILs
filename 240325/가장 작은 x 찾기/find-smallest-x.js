const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MAX_NUM = 10000;

// 변수 선언 및 입력
const n = Number(input[0]);
const conditions = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// x에서 시작하는 것이 가능한지 판단하는 함수
function satisfy(x) {
    for (const [a, b] of conditions) {
        // 계속 2배씩 해주며 
        // a <= x <= b를 항상 만족하는지 확인합니다.
        // 아니라면, False를 반환합니다.
        x *= 2;
        if (x < a || x > b) {
            return false;
        }
    }

    return true;
}

// 가능한 모든 범위에 대해 탐색해봅니다.
// 1 ~ MAX_NUM 사이가 아니라면 애초에 처음부터 불가능합니다.
for (let x = 1; x <= MAX_NUM; x++) {
    // 만족하는 x가 있다면,
    // 해당 x가 최소이므로 출력합니다.
    if (satisfy(x)) {
        console.log(x);
        break;
    }
}