const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input.shift());
const arr = input.shift().split(' ').map(Number);

const intMax = Number.MAX_SAFE_INTEGER;
let minDist = intMax;

// 각 i번째 집으로 모였을 때의 합을 구해줍니다.
for (let i = 0; i < n; i++) {
    let sumDist = 0;
    for (let j = 0; j < n; j++) {
        sumDist += Math.abs(j - i) * arr[j];
    }
    
    // 가능한 거리의 합 중 최솟값을 구해줍니다.
    minDist = Math.min(minDist, sumDist);
}

console.log(minDist);