const SortedSet = require("collections/sorted-set");

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const [n, q] = input[0].trim().split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);
const queries = input.slice(2, 2 + q).map(line => line.trim().split(' ').map(Number));

// 주어진 x좌표값들을 전부 treeset에 넣어줍니다.
const nums = new SortedSet();
arr.forEach(num => nums.push(num));

// treeset에서 정점을 작은 번호부터 뽑으면서
// 각 정점별로 1번부터 순서대로 매칭하여
// 그 결과를 hashmap에 넣어줍니다.
const mapper = new Map();
let cnt = 1;
nums.forEach(num => mapper.set(num, cnt++));

// 질의에 대해
// 각 [a, b]에 해당하는 번호를
// mapper를 통해 구해
// 두 번호 사이의 점의 수를 출력합니다.
queries.forEach(([a, b]) => {
    const newA = mapper.get(a);
    const newB = mapper.get(b);
    console.log(newB - newA + 1);
});