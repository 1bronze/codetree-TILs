const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
let numbers = [0].concat(input.slice(1, 1 + n).map(Number));
let endOfArray = n;

// 입력 배열에서 지우고자 하는 부분 수열을 삭제합니다.
const cutArray = (startIdx, endIdx) => {
    let tempArr = [];

    // 구간 외의 부분만 temp 배열에 순서대로 저장합니다.
    for (let i = 0; i < endOfArray; i++) {
        if (i < startIdx || i > endIdx) {
            tempArr.push(numbers[i]);
        }
    }

    // temp 배열을 다시 numbers 배열로 옮겨줍니다.
    endOfArray = tempArr.length;
    numbers = [...tempArr];
}

// 두 번에 걸쳐 지우는 과정을 반복합니다.
for (let i = 1; i <= 2; i++) {
    const [s, e] = input[n + i].split(' ').map(Number);
    // [s, e] 구간을 삭제합니다.
    cutArray(s - 1, e - 1);
}

// 출력:
console.log(endOfArray);
for (let i = 0; i < endOfArray; i++) {
    console.log(numbers[i]);
}