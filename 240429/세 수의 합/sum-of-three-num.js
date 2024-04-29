const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const count = new Map();
let ans = 0;

for (let i = 0; i < arr.length; i++) {
    const used = new Map();

    const e1 = arr[i];
    
    for (let j = 0; j < i; j++) {
        const e2 = arr[j];
        const e3 = k - arr[i] - arr[j];

        if (used.has(e2) && used.has(e3)) continue;

        if (count.has(e3)) {
            if (e2 === e3) {
                ans += Math.floor(count.get(e2) * (count.get(e3) - 1) / 2);
                used.set(e2, true);
            } else {
                ans += count.get(e2) * count.get(e3);
                used.set(e2, true);
                used.set(e3, true);
            }
        }
    }

    if (count.has(e1)) {
        count.set(e1, count.get(e1) + 1);
    } else {
        count.set(e1, 1);
    }

    // console.log(i, ans);
}

console.log(ans);