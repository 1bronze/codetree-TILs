const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const x = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

let ans = 0;

// 다른 선분과 겹치지 않는 선분의 수를 구합니다.
for (let i = 0; i < n; i++) {
    // i번째 선분이 다른 선분과 겹치지 않는지 확인합니다.
    let overlap = false;
    
    for (let j = 0; j < n; j++) {
        // 자기 자신은 제외합니다.
        if (j === i) {
            continue;
        }
        
        // x1이 큰 쪽이 x2가 더 작다면 겹치게 됩니다.
        if ((x[i][0] <= x[j][0] && x[i][1] >= x[j][1]) || (x[i][0] >= x[j][0] && x[i][1] <= x[j][1])) {
            overlap = true;
            break;
        }
    }
    
    // 겹치지 않았다면 정답의 개수에 하나를 추가합니다.
    if (!overlap) {
        ans += 1;
    }
}

console.log(ans);