const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MAX_NUM = 10000;

// 선언 및 입력:
const [n, k] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(Number);

// 구간 [l, r] 
// 사이에 들어있는 숫자 개수를 반환합니다.
function countNum(l, r) {
    let cnt = 0;
    arr.forEach(elem => {
        if (l <= elem && elem <= r) {
            cnt += 1;
        }
    });

    return cnt;
}

let ans = 0;
// 크기가 K인 모든 구간을 잡아
// 해당 구간 안에 들어오는 숫자의 개수를 세서
// 그 중 최댓값을 계산합니다.
for (let i = 1; i <= MAX_NUM; i++) {
    // 구간 [i, i + k] 사이에 들어있는 숫자를 세어
    // 최댓값을 계산합니다.
    ans = Math.max(ans, countNum(i, i + k));
}

console.log(ans);