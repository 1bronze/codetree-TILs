const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// Number.MAX_SAFE_INTEGER를 사용하여 JavaScript에서의 가장 큰 정수 값으로 초기화합니다.
const INT_MAX = Number.MAX_SAFE_INTEGER;

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

let minDist = INT_MAX;
// i번째 방에서 출발했을 경우의 결과를 구해줍니다.
for (let i = 0; i < n; i++) {
    let sumDist = 0;
    for (let j = 0; j < n; j++) {
        const dist = (j + n - i) % n;
        sumDist += dist * arr[j];
    }
    
    // 가능한 거리의 합 중 최솟값을 구해줍니다.
    minDist = Math.min(minDist, sumDist);
}

console.log(minDist);