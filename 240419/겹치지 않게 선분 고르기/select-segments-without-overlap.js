const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const lines = [];

for (let i = 1; i <= n; i++) {
    const [n1, n2] = input[i].split(' ').map(Number);
    const s = Math.min(n1, n2);
    const e = Math.max(n1, n2);

    lines.push({s: s, e: e});
}

lines.sort((l1, l2) => {
    return l1.e - l2.e;
});

let ans = 1;
let curr = lines[0];
for (let i = 1; i < n; i++) {
    if (lines[i].s > curr.e) {
        ans++;
        curr = lines[i];
    }
}

console.log(ans);