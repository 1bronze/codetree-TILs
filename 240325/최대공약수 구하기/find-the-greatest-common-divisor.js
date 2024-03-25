// 변수 선언 및 입력
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let n = Number(input[0]);
let m = Number(input[1]);

function findGcd(n, m) {
    let gcd = 0;
    for (let i = 1; i <= Math.min(n, m); i++) {
        if (n % i === 0 && m % i === 0) {
            gcd = i;
        }
    }

    process.stdout.write(gcd + "\n");
}

findGcd(n, m);