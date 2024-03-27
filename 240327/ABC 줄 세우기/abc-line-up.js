const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = [0].concat(input[1].split(" "));
let ans = 0;

// 'A' 부터 알파벳 순서대로 찾아 가장 앞으로 이동합니다.
for (let i = 1; i <= n; i++) {
    const x = String.fromCharCode("A".charCodeAt(0) + i - 1);

    // i번째 알파벳을 찾아 idx에 저장합니다.
    let idx = 0;
    for (let j = 1; j <= n; j++) {
        if (arr[j] === x) {
            idx = j;
        }
    }

    // idx번째 알파벳을 i번째 위치까지 swap합니다.
    for (let j = idx - 1; j >= i; j--) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        ans += 1;
    }
}

console.log(ans);