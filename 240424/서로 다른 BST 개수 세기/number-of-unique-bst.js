const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const UNUSED = -1;
const memo = Array(n + 1).fill(UNUSED);

function getNumOfUniqueBst(n) {
    if (memo[n] !== UNUSED) {
        return memo[n];
    }
    
    if (n <= 1) {
        return 1;
    }
    
    let numOfUniqueBst = 0;
    for (let i = 0; i < n; i++) {
        numOfUniqueBst += getNumOfUniqueBst(i) * 
                          getNumOfUniqueBst(n - i - 1);
    }
    
    memo[n] = numOfUniqueBst;
    return memo[n];
}

console.log(getNumOfUniqueBst(n));