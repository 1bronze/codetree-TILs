const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

let ans = 0;

// 입력으로 주어진 사람 수를 보고
// 최소 어느 만큼의 거리를 달려야 하는지 확인합니다.
for (let i = 0; i < n; i++) {
    if (a[i] > b[i]) {
        // 최소 a[i] - b[i]명의 사람들은 오른쪽으로 달려야 합니다.
        const num = a[i] - b[i];
        a[i] -= num;
        a[i + 1] += num;
        ans += num;
    }
}

console.log(ans);