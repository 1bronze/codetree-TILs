const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Step 1.
// 첫 번째 격자를 놓습니다. (i , j)
let maxCnt = 0;
for (let i = 0; i < n; i++) {
    // 격자를 벗어나지 않을 범위로만 잡습니다.
    for (let j = 0; j < n - 2; j++) {
        // 두 번째 격자를 놓습니다. (k , l)
        for (let k = 0; k < n; k++) {
            // 격자를 벗어나지 않을 범위로만 잡습니다.
            for (let l = 0; l < n - 2; l++) {
                // Step 2. 두 격자가 겹치는 경우에는 가짓수로 세지 않습니다.
                if (i === k && Math.abs(j - l) <= 2) {
                    continue;
                }
                
                // Step 3. 두 격자가 겹치지 않는 경우에 대해 동전 수를 세어 갱신해줍니다.
                const cnt1 = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
                const cnt2 = arr[k][l] + arr[k][l + 1] + arr[k][l + 2];
                maxCnt = Math.max(maxCnt, cnt1 + cnt2);
            }
        }
    }
}

console.log(maxCnt);