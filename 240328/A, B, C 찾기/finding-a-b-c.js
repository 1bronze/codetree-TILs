const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[0].split(" ").map(Number);
arr.sort((a, b) => a - b);

const totalSum = Math.max(...arr);
arr.pop(arr.indexOf(totalSum));

for (let i = 0; i < 6; i++) {
    for (let j = i + 1; j < 6; j++) {
        for (let k = j + 1; k < 6; k++) {
            let [a, b, c] = [arr[i], arr[j], arr[k]];

            if (arr.includes(a + b) && arr.includes(b + c) && arr.includes(c + a)) {
                console.log(arr[i], arr[j], arr[k]);
                process.exit();
            }
        }
    }
}