// Declare variables and input
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let string = input[0].split(" ")[0];
let q = Number(input[0].split(" ")[0]);

// Calculate the length of the string.
let leng = string.length;

// Perform q queries.
for (let i = 1; i <= q; i++) {
    let quest = input[i].split(" ");
    
    // Check which query it is.
    if (Number(quest[0]) === 1) {
        // Exchange the a-th and b-th characters and print the string.
        let a = Number(quest[1]);
        let b = Number(quest[2]);
        
        let tmp = string[a - 1];
        
        // Insert the b-th character in place of the a-th character.
        string = string.slice(0, a - 1) + string[b - 1] + string.slice(a);
        
        // Insert the a-th character in place of the b-th character.
        string = string.slice(0, b - 1) + tmp + string.slice(b);
        
        // Print the exchanged string.
        console.log(string);
    }
    
    else {
        // Change all occurrences of character a to b and print the string.
        let a = quest[1];
        let b = quest[2];
        
        // Change all occurrences of character a to b.
        for (let i = 0; i < leng; i++) {
            if (string[i] === a) {
                string = string.slice(0, i) + b + string.slice(i + 1);
            }
        }
        
        // Print the changed string.
        console.log(string);
    }
}