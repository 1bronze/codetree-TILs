const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(row => row.split(" ").map(Number));

const dy = [0, 0, 0, 1, 1, 1, 2, 2, 2];
const dx = [0, 1, 2, 0, 1, 2, 0, 1, 2];

let ans = 0;
for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
        let cnt = 0;
        for (let k = 0; k < 9; k++) {
            let ny = j + dy[k];
            let nx = i + dx[k];
            if (arr[ny][nx] === 1) {
                cnt++;
            }
        }
        ans = Math.max(ans, cnt);
    }
}

console.log(ans);