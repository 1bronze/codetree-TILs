const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// 모든 숫자를 다 만들어 봅니다. (백의 자리수가 i, 십의 자리수가 j, 일의 자리수가 k)
let cnt = 0;
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        for (let k = 1; k < 10; k++) {
            // 같은 수가 있는지 확인합니다.
            if (i === j || j === k || k === i) {
                continue;
            }
            
            // 해당 숫자가 정답일때, 모든 입력에 대해 올바른 답이 나왔는지 확인합니다.
            let succeeded = true;
            for (let [a, numCnt1, numCnt2] of arr) {
                // x : a의 백의 자릿수, y : 십의 자릿수, z : 일의 자릿수
                const x = Math.floor(a / 100);
                const y = Math.floor(a / 10) % 10;
                const z = a % 10;
                
                // cnt1 : 1번 카운트, cnt2 : 2번 카운트
                let cnt1 = 0;
                let cnt2 = 0;
                if (x === i) {
                    cnt1 += 1;
                }
                if (y === j) {
                    cnt1 += 1;
                }
                if (z === k) {
                    cnt1 += 1;
                }
                if (x === j || x === k) {
                    cnt2 += 1;
                }
                if (y === i || y === k) {
                    cnt2 += 1;
                }
                if (z === i || z === j) {
                    cnt2 += 1;
                }

                // 만약 카운트 수가 다르다면 해당 숫자는 정답이 될 수 없습니다.
                if (cnt1 !== numCnt1 || cnt2 !== numCnt2) {
                    succeeded = false;
                    break;
                }
            }
            
            if (succeeded) {
                cnt += 1;
            }
        }
    }
}

console.log(cnt);