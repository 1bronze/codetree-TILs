const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// INT_MIN과 INT_MAX의 JS 대응 부분
const INT_MIN = Number.MIN_SAFE_INTEGER;
const INT_MAX = Number.MAX_SAFE_INTEGER;

// down_max[i][j] : (i, j)을 시작으로 밑으로 쭉 내려가며 
// 만들 수 있는 가로가 1인 직사각형 중 최대 직사각형의 크기
const downMax = Array.from(Array(n), () => Array(m).fill(0));

// down_max 값을 계산합니다.
function preprocessing() {
    // 마지막 행에 대해 계산합니다.
    for(let j = 0; j < m; j++) {
        if(grid[n - 1][j] > 0) {
            downMax[n - 1][j] = 1;
        }
    }
    
    for(let i = n - 2; i >= 0; i--) {
        for(let j = 0; j < m; j++) {
            // (i, j)에 적혀있는 수가 양수라면
            // 이전 최대 직사각형의 크기에 1을 더한 만큼 가능합니다.
            if(grid[i][j] > 0) {
                downMax[i][j] = downMax[i + 1][j] + 1;
            }
        }
    }
}

// down_max 값을 계산합니다.
preprocessing();

let ans = INT_MIN;
// 직사각형의 좌측 상단 꼭지점 (i, j)를 정한 뒤
// 우측 하단 지점의 열 l를 결정해보며
// 그때까지 최대로 가능한 k을 계산합니다.
for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        // (downMax[i][j], downMax[i][j + 1], .... , downMax[i][l]) 중에 
        // 최솟값이 결국 가능한 양수 직사각형의 최대 높이가 됩니다.
        let bestHeight = INT_MAX;
        for(let l = j; l < m; l++) {
            bestHeight = Math.min(bestHeight, downMax[i][l]);

            // 넓이를 계산하여 갱신합니다.
            const k = i + bestHeight - 1;
            ans = Math.max(ans, (k - i + 1) * (l - j + 1));
        }
    }
}

if(ans <= 0) {
    ans = -1;
}

console.log(ans);