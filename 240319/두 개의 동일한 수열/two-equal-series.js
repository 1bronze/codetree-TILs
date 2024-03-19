// 변수 선언 및 입력
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const a = input[1].trim().split(' ').map(Number);
const b = input[2].trim().split(' ').map(Number);

function equal() {
    // n개의 원소를 순서대로 봤을 때
    // 전부 동일한 경우에만 일치합니다.
    // 단 하나라도 다르다면, false입니다.
    for (let i = 0; i < n; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

// 정렬
a.sort((a, b) => a - b);
b.sort((a, b) => a - b);

// 수열이 일치하는지 확인합니다.
if (equal()) {
    console.log("Yes");
} else {
    console.log("No");
}