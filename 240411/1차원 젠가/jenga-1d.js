const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
let numbers = input.slice(1, 1 + n).map(Number);
let endOfArray = n;

// 입력 배열에서 지우고자 하는 부분 수열을 삭제합니다.
const cutArray = (startIdx, endIdx) => {
    const cutLen = endIdx - startIdx + 1;

    for (let i = endIdx + 1; i < endOfArray; i++) {
        numbers[i - cutLen] = numbers[i];
    }

    endOfArray -= cutLen;
};

// 두 번에 걸쳐 지우는 과정을 반복합니다.
for (let i = n + 1; i < n + 3; i++) {
    const [s, e] = input[i].split(' ').map(Number);
    // [s, e] 구간을 삭제합니다.
    cutArray(s - 1, e - 1);
}

// 출력:
console.log(endOfArray);
for (let i = 0; i < endOfArray; i++) {
    console.log(numbers[i]);
}