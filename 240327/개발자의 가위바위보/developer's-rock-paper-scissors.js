const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const pair = input.slice(1, 1 + n).map(line => line.split(" ").map(Number));

let ans = 0;
for (let rock = 1; rock <= 3; rock++) {
    for (let scissor = 1; scissor <= 3; scissor++) {
        if (scissor === rock) continue;

        for (let paper = 1; paper <= 3; paper++) {
            if (paper === rock || paper === scissor) continue;

            let count = 0;
            pair.forEach(([p1, p2]) => {
                if ((p1 === rock && p2 === scissor) || (p1 === scissor && p2 === paper) || (p1 === paper && p2 === rock)) {
                    count++;
                }
            });

            ans = Math.max(ans, count);
        }
    }
}

console.log(ans);