const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const MAX_NUM = 1000;

// 변수 선언 및 입력
const n = Number(input[0]);
const segments = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

let ans = 0;

// 빼야하는 직원을 정합니다.
for (let i = 0; i < n; i++) {
    // i번 직원의 구간을 제외한 나머지 구간에서
    // 운행 되고 있는 시간을 구합니다.

    let count = Array(MAX_NUM).fill(0);

    for (let j = 0; j < n; j++) {
        const [l, r] = segments[j];
        // i번째 구간은 제외합니다.
        if (j === i) continue;

        // 모든 구간을 카운팅합니다.
        for (let k = l; k < r; k++) {
            count[k] += 1;
        }
    }

    let time = 0;

    for (let j = 1; j < MAX_NUM; j++) {
        if (count[j] > 0) {
            time += 1;
        }
    }

    // 운행 되고 있는 시간 중 최댓값을 구합니다.
    ans = Math.max(ans, time);
}

console.log(ans);