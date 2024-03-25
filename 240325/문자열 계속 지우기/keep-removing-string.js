// Variable declaration and input
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0];
let b = input[1];
let lenA = a.length;
let lenB = b.length;

while (true) {
    // Find the first occurrence of string b in string a.
    let idx = -1;
    
    // Tip1: We will compare i, i+1, ..., i+len_b-1.
    // At this time, because the last position must satisfy i+len_b-1 < len_a,
    // we can obtain i < len_a - len_b + 1.
    let candidates = lenA - lenB + 1;
    
    for (let i = 0; i < candidates; i++) {
        // Check if it's the same as b by comparing from position i to the length of b.
        let isSame = true;
        
        for (let j = 0; j < lenB; j++) {
            if (a[i + j] !== b[j]) {
                isSame = false;
                break;
            }
        }
        
        if (isSame) {
            // Since we found the string, return i
            idx = i;
            break;
        }
    }
    
    // In case it's not found
    if (idx === -1) {
        break;
    }
    
    // We delete the characters of the length of string b from position idx in string a.
    a = a.slice(0, idx) + a.slice(idx + lenB);
    
    lenA = a.length;
}

console.log(a);