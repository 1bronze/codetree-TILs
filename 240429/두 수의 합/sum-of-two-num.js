const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

const freq = new Map();

nums.forEach(num => {
    if (freq.has(num))
        freq.set(num, freq.get(num) + 1);
    else
        freq.set(num, 1);
})

let ans = 0;

nums.forEach(num => {
    const find = k - num;

    if (num === find && freq.has(find))
        ans += freq.get(find) - 1;
    else if (freq.has(find))
        ans += freq.get(find);
})

ans = Math.floor(ans / 2);
console.log(ans);