const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const pairs = input.slice(1, 1 + m).map(line => line.split(' ').map(Number));

function countNum(first, second) {
    let cnt = 0;
    // (first, second) 쌍이 (a, b) 혹은 (b, a)라면
    // 그 개수를 세줍니다.
    pairs.forEach(([a, b]) => {
        if (first === a && second === b || first === b && second === a) {
            cnt += 1;
        }
    });

    return cnt;
}

let ans = 0;
// 모든 쌍 (i, j)를 잡아보며
// 각 쌍이 몇 번씩 나왔는지를 확인하여
// 그 중 최댓값을 계산합니다.
for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
        ans = Math.max(ans, countNum(i, j));
    }
}

console.log(ans);