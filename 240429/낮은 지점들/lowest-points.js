const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const n = Number(input[0]);
const xys = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const minY = new Map();

// 각 x마다 최소 y만 저장해줍니다.
xys.forEach(([x, y]) => {
    // 아직 map에 해당 x가 없다면 y값을 그대로 넣어줍니다.
    if (!minY.has(x))
        minY.set(x, y);
    // 그렇지 않다면, 최소 y를 넣어줍니다.
    else
        minY.set(x, Math.min(minY.get(x), y));
});

// 답을 저장합니다.
let sumVal = 0;

// map에 들어있는 값들을 순회합니다.
minY.forEach((value, key) => {
    // value에 해당하는 y값을 더해줍니다.
    sumVal += value;
});

console.log(sumVal);