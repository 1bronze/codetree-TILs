const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MIN = Number.MIN_SAFE_INTEGER;

// 변수 선언 및 입력
const n = Number(input[0]);
const a = [0].concat(input[1].trim().split(' ').map(Number));

// 최댓값을 구해야 하는 문제이므로 
// 초기값을 INT_MIN으로 설정합니다.
let ans = INT_MIN;

// 현재 연속 부분 수열 내 원소의 합을 
// 저장합니다.
let sumOfNums = 0;

for (let i = 1; i <= n; i++) {
    // 만약 현재 연속 부분 수열 내 원소의 합이 
    // 0보다 작아진다면, 지금부터 새로운 
    // 연속 부분 수열을 만드는 것이 더 유리합니다.
    if (sumOfNums < 0) {
        sumOfNums = a[i];
    }
    // 그렇지 않다면 기존 연속 부분 수열에 
    // 현재 원소를 추가하는 것이 더 좋습니다.
    else {
        sumOfNums += a[i];
    }
    
    ans = Math.max(ans, sumOfNums);
}

console.log(ans);