const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].trim().split(" ").map(Number);

function quickSort(low, high) {
    if (low >= high) return;

    let pivot = arr[high];
    let smallArr = [];
    let largeArr = [];

    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            smallArr.push(arr[i]);
        } else {
            largeArr.push(arr[i]);
        }
    }

    let i = low;
    smallArr.forEach(elem => {
        arr[i++] = elem;
    });
    arr[i++] = pivot;
    largeArr.forEach(elem => {
        arr[i++] = elem;
    });

    quickSort(low, low + smallArr.length - 1);
    quickSort(low + smallArr.length + 1, high);
}

quickSort(0, n-1);
console.log(arr.join(" "));