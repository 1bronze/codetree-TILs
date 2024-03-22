const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MAX_T = 1000;

// 변수 선언 및 입력
const [n, c, g, h] = input[0].split(' ').map(Number);
const ta = [], tb = [];

for (let i = 1; i <= n; i++) {
    const [taValue, tbValue] = input[i].split(' ').map(Number);
    ta.push(taValue);
    tb.push(tbValue);
}

// 특정 장비의 t 온도에서의 작업량을 계산합니다.
function singleEfficiency(low, high, t) {
    if (t < low) {
        return c;
    } else if (t <= high) {
        return g;
    } else {
        return h;
    }
}

// 온도 t에 대한 작업량을 계산합니다.
function performance(t) {
    let totalEfficiency = 0;

    // 장비별 작업량의 합을 계산합니다.
    for (let i = 0; i < n; i++) {
        totalEfficiency += singleEfficiency(ta[i], tb[i], t);
    }
    return totalEfficiency;
}

// 각 온도에 대해 작업량을 계산하여
// 그 중 최댓값을 구해줍니다.
let maxOut = 0;
for (let t = 0; t <= MAX_T; t++) {
    maxOut = Math.max(maxOut, performance(t));
}

console.log(maxOut);