const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(" ").map(Number));

let ans = -1;

// 직사각형 좌표 설정
for (let y1 = 0; y1 < n; y1++) {
    for (let x1 = 0; x1 < m; x1++) {
        for (let y2 = y1; y2 < n; y2++) {
            for (let x2 = x1; x2 < m; x2++) {
                
                let isPossible = true;
                // 양수인지 확인
                for (let y = y1; y <= y2; y++) {
                    for (let x = x1; x <= x2; x++) {
                        if (grid[y][x] <= 0) isPossible = false;
                    }
                }

                if (isPossible) {
                    ans = Math.max(ans, (y2 - y1 + 1) * (x2 - x1 + 1));
                }
            }
        }
    }
}

console.log(ans);