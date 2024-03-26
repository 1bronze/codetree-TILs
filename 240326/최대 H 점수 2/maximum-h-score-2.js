const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, l] = input[0].split(' ').map(Number);
const a = input[1].trim().split(' ').map(Number);

// 모든 답을 일일히 가정해 봅니다.
let ans = 0;
for (let i = 1; i <= n + 1; i++) {
    // 정답이 i일 때 가능한지 판단합니다.

    // i - 1인 값은 최대 l개까지 i로 올릴 수 있습니다.
    // cnt : i이상인 숫자의 개수(i - 1인 숫자는 l개까지 카운트)
    // cntl : 지금까지 1 증가시킨 숫자의 개수
    let cnt = 0;
    let cntl = 0;

    for (let j = 0; j < n; j++) {
        if (a[j] >= i) {
            cnt += 1;
        } else if (a[j] === i - 1) {
            if (cntl < l) {
                cntl += 1;
                cnt += 1;
            }
        }
    }

    if (cnt >= i) {
        ans = i;
    }
}

console.log(ans);