const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 5).map(line => line.split(' ').map(Number));

const map1 = new Map();
const map2 = new Map();

for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
        map1.set(arr[0][i] + arr[1][j], (map1.get(arr[0][i] + arr[1][j]) || 0) + 1);

for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
        map2.set(arr[2][i] + arr[3][j], (map1.get(arr[2][i] + arr[3][j]) || 0) + 1);

let ans = 0;

map1.forEach((value, key) => {
    const diff = 0 - key;
    ans += value * (map2.get(diff) || 0);
})

console.log(ans);