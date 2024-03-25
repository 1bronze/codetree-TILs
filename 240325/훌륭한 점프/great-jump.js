const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MAX_NUM = 100;

// 변수 선언 및 입력:
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

function isPossible(limit) {
    // 마지막 index로부터
    // 숫자 limit을 넘지 않으면서
    // 거리 k이내로 계속 이동이 가능한지를 판단합니다.
    let lastIdx = 0;
    for (let i = 1; i < n; i++) {
        if (arr[i] <= limit) {
            if (i - lastIdx > k) {
                return false;
            }
            lastIdx = i;
        }
    }

    return true;
}

// 밟으며 지나간 최댓값을 i라고 가정했을 때
// 거리 k 이내로 점프하며 끝까지 도달하는 것이
// 가능한지를 살펴봅니다.
// 가능하다면, 그때의 i가 최솟값이므로
// 답을 출력하고 종료합니다.
for (let i = Math.max(arr[0], arr[n - 1]); i <= MAX_NUM; i++) {
    if (isPossible(i)) {
        console.log(i);
        break;
    }
}