const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const [a, b, c] = input[1].split(' ').map(Number);
const [a2, b2, c2] = input[2].split(' ').map(Number);

// 모든 조합을 다 만들어 봅니다.
let cnt = 0;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        for (let k = 1; k <= n; k++) {
            // 모든 자리가 주어진 첫 조합과의 거리가 2 이내인지 확인합니다.
            if ((Math.abs(a - i) <= 2 || Math.abs(a - i) >= n - 2) && (Math.abs(b - j) <= 2 || Math.abs(b - j) >= n - 2) && 
                (Math.abs(c - k) <= 2 || Math.abs(c - k) >= n - 2)) {
                cnt += 1;
            // 모든 자리가 주어진 두 번째 조합과의 거리가 2 이내인지 확인합니다.
            } else if ((Math.abs(a2 - i) <= 2 || Math.abs(a2 - i) >= n - 2) && (Math.abs(b2 - j) <= 2 || Math.abs(b2 - j) >= n - 2) &&
                (Math.abs(c2 - k) <= 2 || Math.abs(c2 - k) >= n - 2)) {
                cnt += 1;
            }
        }
    }
}

console.log(cnt);