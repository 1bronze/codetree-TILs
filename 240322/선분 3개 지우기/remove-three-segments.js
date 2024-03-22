const MAX_A = 100;

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const section = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// 3개의 선분을 모두 골라보면서
// 모두 겹쳐지지 않도록 하는 가짓수를 구합니다.
let ans = 0;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            // i, j, k번 선분을 제외했을 때
            // 모든 선분이 겹치지 않으면 정답을 1 추가합니다.

            // overlap : 모든 선분이 겹치지 않으면 false
            let overlap = false;
            let arr = Array(MAX_A + 1).fill(0);
            
            for (let x = 0; x < n; x++) {
                // 제외한 3개의 선분이면 넘어갑니다.
                if (x === i || x === j || x === k) {
                    continue;
                }
                
                for (let y = section[x][0]; y <= section[x][1]; y++) {
                    arr[y] += 1;
                }
            }
            
            for (let x = 0; x <= MAX_A; x++) {
                if (arr[x] > 1) {
                    overlap = true;
                }
            }
            
            if (!overlap) {
                ans += 1;
            }
        }
    }
}

console.log(ans);