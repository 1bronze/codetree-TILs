const SortedSet = require("collections/sorted-set");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const queries = input.slice(2, 2 + m).map(Number);

// treeset에 숫자들을 넣어줍니다.
const s = new SortedSet(arr);

// 같거나 큰 최초의 숫자를 계산합니다.
queries.forEach(num => {
    const idx = s.findLeastGreaterThanOrEqual(num);
    // 그러한 숫자가 없다면 -1을 출력합니다.
    if (!idx) {
        console.log(-1);
    }
    // 존재한다면, 그 숫자를 출력합니다.
    else {
        console.log(idx.value);
    }
});