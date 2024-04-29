const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

const count = new Map();
const newArr = [];

// 각 숫자가 몇 번씩 나왔는지를
// hashmap에 기록해줍니다.
arr.forEach(elem => {
    if (count.has(elem))
        count.set(elem, count.get(elem) + 1);
    else
        count.set(elem, 1);
});

// hashmap을 순회하며
// 중복되지 않게 새 배열을 만들어 줍니다.
for (let [key, value] of count)
    newArr.push([value, key]);

// 문제에서 요구한 정렬 기준에 맞추어 정렬합니다.
newArr.sort((a, b) => {
    if(a[0] !== b[0]) return a[0] - b[0];
    else return a[1] - b[1];
});

// 출력:
let ans = "";
for (let i = newArr.length - 1; i >= newArr.length - k; i--)
    ans += `${newArr[i][1]} `;
console.log(ans);