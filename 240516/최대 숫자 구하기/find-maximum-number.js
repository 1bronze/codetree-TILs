const SortedSet = require("collections/sorted-set");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
const [n, m] = input[0].split(" ").map(Number);
const queries = input[1].split(" ").map(Number);

// treeset에 숫자들을 넣어줍니다.
const s = new SortedSet();
for (let i = 1; i <= m; i++)
    s.push(i);

// 제거 후 최댓값을 출력하는 것을 반복합니다.
queries.forEach(target => {
    // 해당 값을 제거합니다.
    s.delete(target);

    // 최댓값을 출력합니다.
    console.log(s.findGreatest().value);
});