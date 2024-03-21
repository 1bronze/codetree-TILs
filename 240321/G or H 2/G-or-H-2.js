const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MAX_NUM = 100;

// 변수 선언 및 입력
const n = Number(input.shift());
const arr = Array(MAX_NUM + 1).fill(0);

for (let i = 0; i < n; i++) {
    const [xStr, c] = input[i].split(' ');
    const x = Number(xStr);
    
    arr[x] = c === 'G' ? 1 : 2;
}

// 모든 구간의 시작점을 잡아봅니다.
let maxLen = 0;
for (let i = 0; i <= MAX_NUM; i++) {
    for (let j = i + 1; j <= MAX_NUM; j++) {
        // i와 j 위치에 사람이 있는지 확인합니다.
        if (arr[i] === 0 || arr[j] === 0) {
            continue;
        }

        // 해당 구간 내 g와 h의 개수를 구합니다.
        let cntG = 0;
        let cntH = 0;
        
        for (let k = i; k <= j; k++) {
            if (arr[k] === 1) {
                cntG += 1;
            }
            if (arr[k] === 2) {
                cntH += 1;
            }
        }
        
        // 조건을 만족할 때 구간의 길이를 구해 최댓값과 비교합니다.
        if (cntG === 0 || cntH === 0 || cntG === cntH) {
            const leng = j - i;
            maxLen = Math.max(maxLen, leng);
        }
    }
}

console.log(maxLen);