const SortedSet = require("collections/sorted-set");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
const [n, m] = input[0].split(" ").map(Number);
const points = input.slice(1, 1 + n).map(line => line.split(" ").map(Number));

// treeset에 모든 점을 넣어줍니다.
const s = new SortedSet();
points.forEach(point => s.push(point));

// m개의 질의에 대해 숫자 k보다 
// x값이 같거나 큰 점 중 x값이 가장 작은 점을 찾습니다.
// x값이 가장 작은 점이 여러 개일 경우 
// y값이 가장 작은 점이 나오도록 하려면, 
// (x, -1)로 조회하여 x가 같을 때 y값이 -1보다 큰
// 최초의 위치가 나올 수 있도록 해야 함에 유의합니다.
const queries = input.slice(1 + n, 1 + n + m).map(Number);

queries.forEach(k => {
    // 만약 해당하는 점이 없다면, -1 -1을 출력합니다.
    const idx = s.findLeastGreaterThan([k, -1]);
    if (!idx) {
        console.log("-1 -1");
    } 
    // 그러한 점이 있다면 해당 점을 출력하고 제외해줍니다.
    else {
        const [x, y] = idx.value;
        console.log(x, y);
        s.delete(idx.value);
    }
});