var Map = require("collections/sorted-map");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0])

const words = input.slice(1, n + 1).map(row => row.trim());
const freq = new Map();
words.forEach(word => freq.set(word, (freq.get(word) || 0) + 1));


freq.forEach(function (cnt, word) {
    const ratio = (cnt / n) * 100;
    console.log(`${word} ${ratio.toFixed(4)}`);
});