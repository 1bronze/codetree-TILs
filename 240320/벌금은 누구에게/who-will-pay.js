const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력
const [n, m, k] = input[0].split(' ').map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);
const penaltyNum = Array(n + 1).fill(0);

// 각 패널티 횟수를 세서,
// 최초로 K번 이상 벌칙을 받는 사람을 추적합니다.
let ans = -1;
for (let target of penalizedPersons) {
    penaltyNum[target] += 1;

    if (penaltyNum[target] >= k) {
        ans = target;
        break;
    }
}

console.log(ans);