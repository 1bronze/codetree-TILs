const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const [a, b, c] = input[1].trim().split(' ').map(Number);

// 모든 조합을 다 만들어 봅니다.
let cnt = 0;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        for (let k = 1; k <= n; k++) {
            // 한 자리라도 주어진 조합과의 거리가 2 이내인지 확인합니다.
            if (Math.abs(a - i) <= 2 || Math.abs(b - j) <= 2 || Math.abs(c - k) <= 2) {
                cnt += 1;
            }
        }
    }
}

console.log(cnt);