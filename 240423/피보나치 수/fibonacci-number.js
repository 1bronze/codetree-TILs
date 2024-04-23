const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const UNUSED = -1;

const n = Number(input[0]);
const memo = Array(n + 1).fill(UNUSED);

function fib(n) {
    if (memo[n] !== UNUSED)
        return memo[n];

    if (n === 1 || n === 2)
        return 1;
    
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
}

console.log(fib(n));