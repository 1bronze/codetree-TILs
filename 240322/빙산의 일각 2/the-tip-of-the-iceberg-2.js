const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MAX_H = 1000;

// 변수 선언 및 입력
const n = Number(input[0]); // 첫 번째 원소를 꺼내고 나머지 원소들을 배열로 만듭니다.
const h = input.slice(1, 1 + n).map(Number); // 나머지 입력을 숫자로 변환합니다.

let ans = 0;

// 각 높이에 대해
// 빙산 덩어리의 개수의 최댓값을 구합니다.
for (let i = 1; i <= MAX_H; i++) {
    // 물의 높이가 i일 때 빙산 덩어리의 개수를 구합니다.
    let cnt = 0;

    // 가장 왼쪽에 빙산이 있는 경우의 예외를 처리해줍니다.
    if (h[0] > i) {
        cnt += 1;
    }

    // 바로 앞 블록은 해수면에 잠겨있고
    // 자기 자신의 블록은 해수면 위에 떠있는 경우,
    // 자기 자신 블록부터 시작하는 빙산이 하나 더 있습니다.
    for (let j = 1; j < n; j++) {
        if (h[j] > i && h[j - 1] <= i) {
            cnt += 1;
        }
    }

    ans = Math.max(ans, cnt);
}

console.log(ans);