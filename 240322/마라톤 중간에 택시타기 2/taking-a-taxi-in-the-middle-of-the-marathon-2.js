const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = Array.from({length: n}, (_, i) => input[i + 1].split(' ').map(Number));

// 각 i번째 체크포인트를 건너 뛰었을 때의 거리를 구해줍니다.
let ans = Number.MAX_SAFE_INTEGER;
for (let i = 1; i < n - 1; i++) {
    // 거리를 구합니다.
    let dist = 0;
    let prevIdx = 0;
    for (let j = 1; j < n; j++) {
        if (j === i) {
            continue;
        }
        dist += Math.abs(arr[prevIdx][0] - arr[j][0]) + Math.abs(arr[prevIdx][1] - arr[j][1]);
        prevIdx = j;
    }
    
    ans = Math.min(ans, dist);
}

// 출력
console.log(ans);