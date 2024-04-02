const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = [0].concat(input[1].trim().split(" ").map(Number));

function heapify(n, i) {
    let largest = i;
    let l = 2 * i;
    let r = 2 * i + 1;

    if (l <= n && arr[l] > arr[largest]) largest = l;
    if (r <= n && arr[r] > arr[largest]) largest = r;

    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(n, largest);
    }
}

function heapSort() {
    for (let i = Math.floor(n / 2); i > 0; i--)
        heapify(n, i);

    for (let i = n; i > 1; i--) {
        [arr[1], arr[i]] = [arr[i], arr[1]];
        heapify(i - 1, 1);
    }
}

heapSort();

console.log(arr.slice(1).join(" "));