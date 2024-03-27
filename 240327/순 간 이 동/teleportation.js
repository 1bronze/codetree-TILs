fs = require("fs")
input = fs.readFileSync(0).toString().trim();

const [a, b, x, y] = input.split(" ").map(Number);

let ans = 0;

// Case 1. a > b
ans = Math.abs(a-b);

// Case 2. a > x > b
ans = Math.min(ans, Math.abs(a-x) + Math.abs(x-b));

// Case 3. a > y > b
ans = Math.min(ans, Math.abs(a-y) + Math.abs(y-b));

// Case 4. a > x > y > b
ans = Math.min(ans, Math.abs(a-x) + Math.abs(y-b));

// Case 5. a > y > x > b
ans = Math.min(ans, Math.abs(a-y) + Math.abs(x-b));

console.log(ans);