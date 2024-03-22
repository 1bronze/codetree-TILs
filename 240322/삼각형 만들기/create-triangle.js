const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// 삼각형의 넓이에 2를 곱한 값을 반환합니다.
function area(x1, y1, x2, y2, x3, y3) {
    return Math.abs((x1 * y2 + x2 * y3 + x3 * y1) -
                     (x2 * y1 + x3 * y2 + x1 * y3));
}

// 3개의 점을 모두 골라보면서
// 조건을 만족하는 경우 중
// 최대 넓이를 계산합니다.
let maxArea = 0;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            // x값이 같은 쌍이 있으며, y값 역시 같은 쌍이 있는 경우에만
            // 최대 넓이를 계산합니다.
            const [x1, y1] = points[i];
            const [x2, y2] = points[j];
            const [x3, y3] = points[k];
            if ((x1 === x2 || x1 === x3 || x2 === x3) &&
                (y1 === y2 || y1 === y3 || y2 === y3)) {
                maxArea = Math.max(maxArea, 
                                   area(x1, y1, x2, y2, x3, y3));
            }
        }
    }
}

console.log(maxArea);