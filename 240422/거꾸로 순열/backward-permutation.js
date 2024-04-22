const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const visited = Array(n + 1).fill(false);
let picked = [];

// 지금까지 선택한 수의 개수를 cnt라 했을 때
// 계속 탐색을 이어서 진행합니다.
function getPermutation(cnt) {
    // 모든 원소를 선택했을 때, 해당 순열을 출력합니다.
    if (cnt === n) {
        console.log(picked.join(' '));
    }

    // 뒤에서부터 하나씩 원소를 선택합니다.
    for (let i = n; i > 0; i--) {
        if (visited[i]) {
            continue;
        }

        visited[i] = true;
        picked.push(i);

        getPermutation(cnt + 1);

        visited[i] = false;
        picked.pop();
    }
}

getPermutation(0);