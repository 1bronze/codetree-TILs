const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
const strArray = [0].concat(input.slice(1, 1 + n));
const queries = input.slice(1 + n, 1 + n + m);

const map = new Map();

strArray.forEach((elem, i) => {
    map.set(elem, i);
    map.set(String(i), elem);
});

queries.forEach(elem => console.log(map.get(elem)));