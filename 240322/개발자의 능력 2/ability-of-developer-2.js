const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = 6;
const arr = input[0].split(' ').map(Number);

function diff(i, j, k, l) {
    // 세 번째 팀원의 합은 전체에서 첫 번째 팀원과 두 번째 팀원의 합을 빼주면 됩니다.
    const sum1 = arr[i] + arr[j];
    const sum2 = arr[k] + arr[l];
    const sum3 = arr.reduce((acc, curr) => acc + curr, 0) - sum1 - sum2;

    // 세 팀의 차이 중 최댓값을 리턴합니다.
    let ret = Math.abs(sum1 - sum2);
    ret = Math.max(ret, Math.abs(sum2 - sum3));
    ret = Math.max(ret, Math.abs(sum3 - sum1));

    return ret;
}

// 첫 번째 팀원을 만들어줍니다.
let minDiff = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {

        // 두 번째 팀원을 만들어줍니다.
        for (let k = 0; k < n; k++) {
            for (let l = k + 1; l < n; l++) {
                // 첫 번째 팀원과 두 번째 팀원이 겹치는지 여부를 확인합니다.
                if (k === i || k === j || l === i || l === j) {
                    continue;
                }
                minDiff = Math.min(minDiff, diff(i, j, k, l));
            }
        }
    }
}

console.log(minDiff);