const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(line => line.trim().split(' ').map(Number));

let ans = 0;
for (let i = 0; i < n; i++) {
    let cnt = 1;
    for (let j = 0; j < n; j++) {
        if (j - 1 >= 0 && arr[i][j] === arr[i][j - 1]) cnt++;
        else cnt = 1;
    }
    if (cnt >= m) ans++;
}
for (let i = 0; i < n; i++) {
    let cnt = 1;
    for (let j = 0; j < n; j++) {
        if (j - 1 >= 0 && arr[j][i] === arr[j - 1][i]) cnt++;
        else cnt = 1;
    }
    if (cnt >= m) ans++;
}

console.log(ans);