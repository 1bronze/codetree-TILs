const Heap = require("collections/heap");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
const n = Number(input[0]);
const commands = input.slice(1, 1 + n);
const pq = new Heap();

commands.forEach(line => {
    const command = line.split(" ")[0];

    if (command === "push") {
        const x = Number(line.split(" ")[1]);
        pq.push(x);
    }

    else if (command === "pop") {
        console.log(pq.pop());
    }

    else if (command === "size") {
        console.log(pq.length);
    }

    else if (command === "empty") {
        console.log((pq.length === 0) ? 1 : 0);
    }

    else {
        console.log(pq.peek());
    }
});