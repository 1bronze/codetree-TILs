const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [x, y] = input[0].split(' ').map(Number);

// 각 자리 숫자의 합을 구하여 반환합니다.
function digitSum(n) {
    if (n < 10) {
        return n;
    }
    // 두 자리 이상의 숫자라면,
    // 맨 끝자리를 제외한 숫자들의 합을 재귀적으로 호출한 뒤,
    // 그 결과와 마지막 자릿수를 더해 반환합니다.
    else {
        return digitSum(Math.floor(n / 10)) + (n % 10);
    }
}

let ans = 0;

// 각 숫자에 대해 
// 각 자리 숫자의 합을 구해
// 그 중 최댓값을 계산합니다.
for (let i = x; i <= y; i++) {
    ans = Math.max(ans, digitSum(i));
}

console.log(ans);