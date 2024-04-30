const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const exchanges = input.slice(1, 1 + k).map(line => line.split(' ').map(Number));

const cur = new Array(n + 1);
const records = Array.from(Array(n + 1), () => new Set());

for (let i = 1; i <= n; i++) {
    cur[i] = i;
    records[cur[i]].add(i);
}

for (let c = 0; c < 3; c++) {
    exchanges.forEach(([a, b]) => {
        [cur[a], cur[b]] = [cur[b], cur[a]];

        records[cur[a]].add(a);
        records[cur[b]].add(b);
    });
}

for (let i = 1; i <= n; i++)
    console.log(records[i].size);