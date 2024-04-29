const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
const n = Number(input[0]);
const arr = input.slice(1, 1 + n);

const freq = new Map();
let ans = 0;

// 각 문자열이 몇 번씩 나왔는지를
// hashmap에 기록해줍니다.
arr.forEach(elem => {
    // 이미 나와있던 문자열이라면 1을 더해줍니다.
    if (freq.has(elem))
        freq.set(elem, freq.get(elem) + 1);
    // 처음 나온 문자열이라면 1을 직접 적어줘야 합니다.
    else
        freq.set(elem, 1);

    // 가장 많이 나온 횟수를
    // 갱신해줍니다.
    ans = Math.max(ans, freq.get(elem));
});

console.log(ans);