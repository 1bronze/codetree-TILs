const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// (x1, y1), (x2, y2)를 두 꼭지점으로 하는
// 직사각형에 있는 값이 전부 양수인지 판단합니다.
function positiveRect(x1, y1, x2, y2) {
    for(let i = x1; i <= x2; i++) {
        for(let j = y1; j <= y2; j++) {
            if(grid[i][j] <= 0) {
                return false;
            }
        }
    }
    return true;
}

let ans = -1;

// 직사각형의 양쪽 두 꼭지점 (i, j), (k, l)
// 를 정하여
// 해당 직사각형 안에 있는 값이 전부 양수일 때만
// 크기를 갱신합니다.
for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        for(let k = i; k < n; k++) {
            for(let l = j; l < m; l++) {
                if(positiveRect(i, j, k, l)) {
                    ans = Math.max(ans, (k - i + 1) * (l - j + 1));
                }
            }
        }
    }
}

console.log(ans);