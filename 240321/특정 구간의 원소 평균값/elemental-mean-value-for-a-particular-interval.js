const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// 모든 구간을 잡아봅니다.
let cnt = 0;
for (let i = 0; i < n; i++) { // 구간의 시작점을 잡아봅니다.
    for (let j = i; j < n; j++) { // 구간의 끝점을 잡아봅니다.
        // 구간 [i, j] 내 원소의 합을 구합니다.
        let sumInterval = 0;
        for (let k = i; k <= j; k++) {
            sumInterval += arr[k];
        }

        // 평균을 구합니다.
        let avg = sumInterval / (j - i + 1);

        // 구간 내에 원소 평균값과 동일한 원소가 있으면 개수를 세줍니다.
        let exists = false;
        for (let k = i; k <= j; k++) {
            if (arr[k] === avg) {
                exists = true;
            }
        }

        if (exists) {
            cnt += 1;
        }
    }
}

console.log(cnt);