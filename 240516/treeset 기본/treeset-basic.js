const SortedSet = require("collections/sorted-set");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1, 1 + n);
const s = new SortedSet();

commands.forEach(line => {
    const command = line.split(" ")[0];

    if (command === "add") {
        const x = Number(line.split(" ")[1]);
        s.push(x);
    } 
    
    else if (command === "remove") {
        const x = Number(line.split(" ")[1]);
        s.delete(x);
    } 
    
    else if (command === "find") {
        const x = Number(line.split(" ")[1]);
        
        if (s.has(x)) {
            console.log("true");
        } else {
            console.log("false");
        }
    } 
    
    else if (command === "lower_bound") {
        const x = Number(line.split(" ")[1]);

        if (s.findLeastGreaterThanOrEqual(x)) {
            console.log(s.findLeastGreaterThanOrEqual(x).value);
        } else {
            console.log("None");
        }
    } 
    
    else if (command === "upper_bound") {
        const x = Number(line.split(" ")[1]);

        if (s.findLeastGreaterThan(x)) {
            console.log(s.findLeastGreaterThan(x).value);
        } else {
            console.log("None");
        }
    } 
    
    else if (command === "largest") {
        if (s.findGreatest()) {
            console.log(s.findGreatest().value);
        } else {
            console.log("None");
        }
    } 
    
    else {
        if (s.findLeast()) {
            console.log(s.findLeast().value);
        } else {
            console.log("None");
        }
    }
});