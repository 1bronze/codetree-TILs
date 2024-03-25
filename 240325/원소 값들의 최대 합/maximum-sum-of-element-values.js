const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const arr = [0].concat(input[1].trim().split(' ').map(Number));

let ans = 0;
// 어느 지점에서 시작할지 전부 시도해 봅니다.
// 모든 경우의 수에 대해 최대가 되도록 하는 수를 계산합니다.
for (let i = 1; i <= n; i++) {
    // 시작점은 i입니다.
    let sumElement = 0;
    let cur = i;

    // m번 움직임을 반복합니다.
    for (let j = 0; j < m; j++) {
        sumElement += arr[cur];
        cur = arr[cur];
    }
    
    ans = Math.max(ans, sumElement);
}

console.log(ans);