const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const maxX = 10;

// 변수 선언 및 입력
const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

let ans = 0;

// 모든 직선에 대해 전부 시도해 봅니다.
for (let i = 0; i <= maxX; i++) {
    for (let j = 0; j <= maxX; j++) {
        for (let k = 0; k <= maxX; k++) {
            // success : 직선 3개로 모든 점을 지나게 할 수 있으면 true
            let success = true;
            // x축에 평행한 직선 3개로 모든 점을 지나게 할 수 있는 경우
            points.forEach(([x, y]) => {
                // 해당 점이 직선에 닿으면 넘어갑니다
                if (x === i || x === j || x === k) {
                    return;
                }
                
                success = false;
            });
            if (success) {
                ans = 1;
            }

            // x축에 평행한 직선 2개와 y축에 평행한 직선 1개로 모든 점을 지나게 할 수 있는 경우
            success = true;
            points.forEach(([x, y]) => {
                // 해당 점이 직선에 닿으면 넘어갑니다
                if (x === i || x === j || y === k) {
                    return;
                }
                
                success = false;
            });
            if (success) {
                ans = 1;
            }
                
            // x축에 평행한 직선 1개와 y축에 평행한 직선 2개로 모든 점을 지나게 할 수 있는 경우
            success = true;
            points.forEach(([x, y]) => {
                // 해당 점이 직선에 닿으면 넘어갑니다
                if (x === i || y === j || y === k) {
                    return;
                }
                
                success = false;
            });
            if (success) {
                ans = 1;
            }
            
            // y축에 평행한 직선 3개로 모든 점을 지나게 할 수 있는 경우
            success = true;
            points.forEach(([x, y]) => {
                // 해당 점이 직선에 닿으면 넘어갑니다
                if (y === i || y === j || y === k) {
                    return;
                }
                
                success = false;
            });
            if (success) {
                ans = 1;
            }
        }
    }
}

console.log(ans);