const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력
let x = Number(input[0]);
let t = 0;
let leftDist = x;
let v = 1;

while (true) {
    leftDist -= v;
    t += 1;

    if (leftDist === 0) {
        break;
    }

    // 속도를 더 높여도 괜찮은지 결정합니다.
    // 속도를 1 더 높이면, (v + 1) + v + (v - 1) + ... + 2 + 1 만큼 이동하게 됩니다.
    // 즉, 남은 거리가 (v + 1) * (v + 2) / 2 보다 크거나 같아야 합니다.
    if (leftDist >= (v + 1) * (v + 2) / 2) {
        v += 1;
    }

    // 속도를 유지해도 괜찮은지 결정합니다.
    // 속도를 유지하면, v + (v - 1) + ... + 2 + 1 만큼 이동하게 됩니다.
    // 즉, 남은 거리가 v * (v + 1) / 2 보다 크거나 같아야 합니다.
    else if (leftDist >= v * (v + 1) / 2) {
        // 아무 것도 하지 않습니다.
    }

    // 위 둘을 만족하지 못하면 반드시 속도를 줄여야만 합니다.
    else {
        v -= 1;
    }
}

console.log(t);