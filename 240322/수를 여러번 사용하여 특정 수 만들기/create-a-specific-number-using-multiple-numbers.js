const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [a, b, c] = input[0].split(' ').map(Number);

let ans = 0;

// a를 몇 회 사용할지 전부 시도해 봅니다.
// 모든 경우의 수에 대해 최대가 되도록 하는 값을 계산합니다.
for (let i = 0; i <= Math.floor(c / a); i++) {
    // a를 i회 사용합니다.
    let cnt = a * i;

    // 값을 최대로 하기 위해 b를 몇 회 사용해야 하는지 계산합니다.
    const numB = Math.floor((c - cnt) / b);

    cnt += numB * b;
    
    ans = Math.max(ans, cnt);
}

console.log(ans);