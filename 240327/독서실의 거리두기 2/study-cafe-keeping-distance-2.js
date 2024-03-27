const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력
const n = Number(input[0]);
const seats = input[1].split("");

// Step1-1. 최적의 위치 찾기
// 인접한 쌍들 중 가장 먼 1간의 쌍을 찾습니다.
let maxDist = 0;
let [maxI, maxJ] = [-1, -1];
for (let i = 0; i < n; i++) {
    if (seats[i] === "1") {
        for (let j = i + 1; j < n; j++) {
            if (seats[j] === "1") {
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

// Step1-2. 최적의 위치 찾기(예외 처리)
// 만약 맨 앞 좌석이 비거나, 맨 뒷 좌석이 비어있는 경우의
// 예외 처리를 해줍니다.
let maxDist2 = -1;
let maxIdx = -1;
// 맨 앞 좌석이 비어있을 때, 맨 앞 좌석에 배정하면
// 거리가 얼마나 줄어드는지 확인합니다.
if (seats[0] === "0") {
    let dist = 0;
    for (let i = 0; i < n; i++) {
        if (seats[i] === "1") {
            break;
        }
        dist += 1;
    }

    if (dist > maxDist2) {
        maxDist2 = dist;
        maxIdx = 0;
    }
}

// 맨 뒷 좌석이 비어있을 때, 맨 뒷 좌석에 배정하면
// 거리가 얼마나 줄어드는지 확인합니다.
if (seats[n - 1] === "0") {
    let dist = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (seats[i] === "1") {
            break;
        }
        dist += 1;
    }

    if (dist > maxDist2) {
        maxDist2 = dist;
        maxIdx = n - 1;
    }
}

// Step2. 최적의 위치에 1을 놓습니다.
// 앞서 찾은 자리들 중 최적의 위치에 놓으면 됩니다.
if (maxDist2 >= maxDist / 2) {
    seats[maxIdx] = "1";
} else {
    seats[Math.floor((maxI + maxJ) / 2)] = "1";
}

// Step3. 이제 인접한 쌍들 중 가장 가까운 1간의 쌍을 찾습니다.
// 이때의 값이 답이 됩니다.
let ans = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    if (seats[i] === "1") {
        for (let j = i + 1; j < n; j++) {
            if (seats[j] === "1") {
                ans = Math.min(ans, j - i);

                // 인접한 쌍을 찾았으므로 빠져나옵니다.
                break;
            }
        }
    }
}

console.log(ans);