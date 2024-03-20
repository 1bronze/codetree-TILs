const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

function numOfDays(m, d) {
    // 계산 편의를 위해 월마다 몇 일이 있는지를 적어줍니다.
    const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDays = 0;

    // 1월부터 (m - 1)월 까지는 전부 꽉 채워져 있습니다.
    for (let i = 1; i < m; i++) {
        totalDays += days[i];
    }

    // m월의 경우에는 정확히 d일만 있습니다.
    totalDays += d;

    return totalDays;
}

// 출력
const totalDays = numOfDays(m2, d2) - numOfDays(m1, d1) + 1;
console.log(totalDays);