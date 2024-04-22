const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const visited = Array(n).fill(false);
let picked = [];

let ans = 0;

// 현재 색칠된 칸을 선택할 행을 row라 했을 때 
// 계속 탐색을 이어서 진행합니다.
// 첫 번째 행에 색칠할 열의 위치부터
// 두 번째, 세 번째, .. n번째 행에 색칠할 열의 위치까지
// 각 열의 위치에 대한 순열을 만들어줍니다.
function findMax(row) {
    // 색칠된 칸에 적힌 수들의 합 중
    // 최댓값을 갱신합니다.
    if (row === n) {
        let sumVal = 0;
        for (let i = 0; i < n; i++) {
            sumVal += grid[i][picked[i]];
        }

        // 답을 갱신해줍니다.
        ans = Math.max(ans, sumVal);
        return;
    }

    // 현재 행에 색칠할 열을 선택합니다.
    for (let i = 0; i < n; i++) {
        if (visited[i]) {
            continue;
        }
        
        visited[i] = true;
        picked.push(i);

        findMax(row + 1);

        visited[i] = false;
        picked.pop();
    }
}
   
// 합이 최대가 되도록
// 탐색을 진행합니다.
findMax(0);

console.log(ans);