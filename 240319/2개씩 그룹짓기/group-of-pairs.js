// 변수 선언 및 입력
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);

// nums를 정렬합니다.
nums.sort((a, b) => a - b);

let groupMax = 0;
for (let i = 0; i < n; i++) {
    // i번째와 2n - 1 - i번째 원소를 매칭합니다.
    const groupSum = nums[i] + nums[2 * n - 1 - i];
    if (groupSum > groupMax) {
        // 최댓값을 갱신합니다.
        groupMax = groupSum;
    }
}

console.log(groupMax);