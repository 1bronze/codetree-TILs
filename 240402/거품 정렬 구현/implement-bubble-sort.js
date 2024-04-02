const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

function bubbleSort() {
    let isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                isSorted = false;
            }
        }
    }
}

bubbleSort();

// 정렬된 배열 요소 출력
console.log(arr.join(' '));