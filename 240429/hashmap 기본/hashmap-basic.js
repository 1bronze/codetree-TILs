const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언
const n = Number(input[0]);
const m = new Map();

for(let i = 1; i < 1 + n; i++) {
    const [command, k, v] = input[i].split(' ');
    
    if(command === "add")
        m.set(k, v);
    else if(command === "remove")
        m.delete(k);
    else {
        if(!m.has(k))
            console.log("None");
        else
            console.log(m.get(k));
    }
}