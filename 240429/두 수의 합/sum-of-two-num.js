const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const count = new Map();
let ans = 0;

// 배열을 앞에서부터 순회하며 쌍을 만들어줍니다.
arr.forEach(elem => {
    const diff = k - elem;

    // 가능한 모든 쌍의 수를 세어줍니다.
    if (count.has(diff))
        ans += count.get(diff);

    // 현재 숫자의 개수를 하나 증가시켜줍니다.
    if (count.has(elem))
        count.set(elem, count.get(elem) + 1);
    else
        count.set(elem, 1);
})

console.log(ans);