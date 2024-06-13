const SortedSet = require("collections/sorted-set");

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, q] = input[0].trim().split(' ').map(Number);
const nums = input[1].trim().split(' ').map(Number);
const queries = input.slice(2, 2 + q).map(line => line.trim().split(' ').map(Number));

const treeSet = new SortedSet();
const mapper = new Map();

nums.forEach(num => treeSet.push(num));

let cnt = 1;
treeSet.forEach(num => mapper.set(num, cnt++));

queries.forEach(([s, e]) => {
    let first = mapper.get(treeSet.findGreatestLessThanOrEqual(s).value);

    let second;
    if (treeSet.findLeastGreaterThan(e) !== undefined)
        second = mapper.get(treeSet.findLeastGreaterThan(e).value);
    else
        second = n + 1;

    console.log(second - first);
});