const SortedSet = require("collections/sorted-set");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
const [n, m] = input[0].split(" ").map(Number);
const points = input.slice(1, 1 + n).map(line => line.split(" ").map(Number));
const queries = input.slice(1 + n, 1 + n + m).map(line => line.split(" ").map(Number));

// treeset에 점들을 넣어줍니다.
const s = new SortedSet();

points.forEach(point => s.push(point));

// 질의마다 조건에 맞는 점을 찾아줍니다.
queries.forEach(target => {
    const idx = s.findLeastGreaterThanOrEqual(target);
    // 그러한 점이 없다면 -1을 출력합니다.
    if (!idx) {
        console.log(-1, -1);
    }
    // 존재한다면, 그 지점의 값을 출력합니다.
    else {
        const [x, y] = idx.value;
        console.log(x, y);
    }
});