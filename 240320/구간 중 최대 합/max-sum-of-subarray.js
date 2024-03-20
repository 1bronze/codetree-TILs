const n = 6;
const k = 4;
const arr = [1, 5, 2, 6, 8, 9];

let ans = 100;
for (let i = 0; i < n - k + 1; i++) {
    let maxVal = 0;
    for (let j = i; j < i + k; j++) {
        maxVal = Math.max(maxVal, arr[j]);
    }
    ans = Math.min(ans, maxVal);
}

console.log(ans);