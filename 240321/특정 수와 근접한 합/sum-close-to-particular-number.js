const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let arraySum = 0;
let ans = Number.MAX_SAFE_INTEGER;

// 배열의 값들의 총합을 미리 구해둡니다.
arr.forEach(elem => {
    arraySum += elem;
});

// 모든 쌍을 다 잡아봅니다.
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        // i번과 j번 수를 제외할 경우 남은 숫자들의 총합은 다음과 같습니다.
        const newSum = arraySum - arr[i] - arr[j];
        
        const diff = Math.abs(newSum - s);
        ans = Math.min(ans, diff);
    }
}

// 정답을 출력합니다.
console.log(ans);