const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

// 사람이 살고 있는 곳이 나오면
// 와이파이를 해당 위치로부터 오른쪽으로 m만큼 떨어진 곳에 놓은 뒤,
// 2m만큼 떨어진 곳에서 시작하여 다시 탐색을 진행합니다.
let cnt = 0, i = 0;
while (i < n) {
    if (arr[i] === 1) {
        cnt += 1;
        i += 2 * m + 1;
    } else {
        i += 1;
    }
}

console.log(cnt);