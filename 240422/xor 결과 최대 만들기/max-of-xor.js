const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);

let ans = 0;

function findMaxXor(currIdx, cnt, currVal) {
    if (cnt === m) {
        ans = Math.max(ans, currVal);
        return;
    }

    if (currIdx === n) {
        return;
    }

    // currIdx index에 있는 숫자를 선택하지 않은 경우
    findMaxXor(currIdx + 1, cnt, currVal);

    // currIdx index에 있는 숫자를 선택한 경우
    findMaxXor(currIdx + 1, cnt + 1, currVal ^ a[currIdx]);
}

findMaxXor(0, 0, 0);

console.log(ans);