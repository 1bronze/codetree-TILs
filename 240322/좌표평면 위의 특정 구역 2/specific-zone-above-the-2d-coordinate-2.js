const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const intMax = Number.MAX_SAFE_INTEGER;

// 변수 선언 및 입력
const n = Number(input.shift());
const points = input.slice(0, n).map(line => line.split(' ').map(Number));

let ans = intMax;

// 빼야하는 점의 위치를 정합니다.
for (let i = 0; i < n; i++) {
    // i번 점을 제외한 나머지 점들을 포함하기 위한
    // 직사각형의 최소 넓이를 구합니다.

    // 직사각형의 최소 넓이를 구하기 위해서는,
    // 남은 점들의 x좌표 중 최소, 최대
    //          y좌표 중 최소 최대를 구해야 합니다.
    let minX = intMax, maxX = 1;
    let minY = intMax, maxY = 1;
    for (let j = 0; j < n; j++) {
        // i번째 점은 제외합니다.
        if (j === i) {
            continue;
        }
        const [x, y] = points[j];

        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
    }

    // 가능한 직사각형 넓이 중 최솟값을 기록합니다.
    ans = Math.min(ans, (maxX - minX) * (maxY - minY));
}

console.log(ans);