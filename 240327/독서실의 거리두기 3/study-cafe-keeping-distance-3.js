const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MAX = Number.MAX_SAFE_INTEGER;

// 변수 선언 및 입력
const n = Number(input[0]);
const seats = input[1].split("").map(Number);

// Step1. 최적의 위치 찾기
// 인접한 쌍들 중 가장 먼 1간의 쌍을 찾습니다.
let maxDist = 0;
let [maxI, maxJ] = [-1, -1];
for (let i = 0; i < n; i++) {
    if (seats[i] === 1) {
        for (let j = i + 1; j < n; j++) {
            if (seats[j] === 1) {
                // 1간의 쌍을 골랐을 때
                // 두 좌석간의 거리가 지금까지의 최적의 답 보다 더 좋다면
                // 값을 갱신해줍니다.
                if (j - i > maxDist) {
                    maxDist = j - i;

                    // 이때, 두 좌석의 위치를 기억합니다.
                    [maxI, maxJ] = [i, j];
                }

                // 인접한 쌍을 찾았으므로 빠져나옵니다.
                break;
            }
        }
    }
}

// Step2. 최적의 위치에 1을 놓습니다.
// 가장 먼 쌍의 위치 가운데에 놓으면 됩니다.
const mid = maxI + Math.floor(maxDist / 2);
seats[mid] = 1;

// Step3. 이제 인접한 쌍들 중 가장 가까운 1간의 쌍을 찾습니다.
// 이때의 값이 답이 됩니다.
let ans = INT_MAX;
for (let i = 0; i < n; i++) {
    if (seats[i] === 1) {
        for (let j = i + 1; j < n; j++) {
            if (seats[j] === 1) {
                ans = Math.min(ans, j - i);

                // 인접한 쌍을 찾았으므로 빠져나옵니다.
                break;
            }
        }
    }
}

console.log(ans);