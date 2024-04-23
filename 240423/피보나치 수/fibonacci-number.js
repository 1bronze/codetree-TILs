const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const memo = Array(n + 1).fill(-1);

function fib(n) {
    if (memo[n] !== -1)
        return memo[n];

    if (n === 1 || n === 2)
        return 1;
    
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
}

console.log(fib(n));