const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MAX = Number.MAX_SAFE_INTEGER;

// 변수 선언 및 입력:
const n = parseInt(input[0]);
let x1List = [], x2List = [];
for (let i = 1; i <= n; i++) {
    const [x1, x2] = input[i].split(' ').map(Number);
    x1List.push(x1);
    x2List.push(x2);
}

let ans = false;
   
// 모든 선분을 한번씩 지어 보고, 모든 상황에 대해
// 전부 겹치는 지점을 하나라도 만들 수 있는지 판단합니다.
for (let skip = 0; skip < n; skip++) {
    let max_x1 = 0, min_x2 = INT_MAX;
    let possible = false;

    for (let i = 0; i < n; i++) {
        if (i === skip) continue;

        // 시작점 중 가장 뒤에 있는 좌표와 끝점 중 가장 앞에 있는 점의 좌표를 확인합니다.
        max_x1 = Math.max(max_x1, x1List[i]);
        min_x2 = Math.min(min_x2, x2List[i]);
    }

    // 만약 어느 한 선분이라도 시작점이 다른 선분의 끝점보다 뒤에 온다면
    // 선분이 전부 겹칠 수 없습니다.
    if (min_x2 >= max_x1) {
        possible = true;
    } else {
        possible = false;
    }

    // 만약 한 가지 방법이라도 전부 겹치는 지점을 만들 수 있다면,
    // 하나의 선분을 적절하게 제거했을 때 전부 겹칠수 있다는 것이 되므로 할 수 있게 됩니다.
    if (possible) {
        ans = true;
    }
}

if (ans) {
    console.log("Yes");
} else {
    console.log("No");
}