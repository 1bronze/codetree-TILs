const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MAX_A = 100;

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let ans = 0;

// 각 숫자에 대해
// 등차수열의 개수를 확인합니다.
for (let x = 1; x <= MAX_A; x++) {
    // 모든 쌍을 만들어 등차수열의 개수를 확인합니다.
    let cnt = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] === 2 * x) {
                cnt += 1;
            }
        }
    }

    ans = Math.max(ans, cnt);
}

console.log(ans);