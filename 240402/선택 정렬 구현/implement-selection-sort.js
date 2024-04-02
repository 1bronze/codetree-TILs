const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

function selectionSort() {
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let k = i + 1; k < n; k++) {
            if (arr[minIndex] > arr[k]) {
                minIndex = k;
            }
        }

        // 값 교체
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

selectionSort();

console.log(arr.join(' '));