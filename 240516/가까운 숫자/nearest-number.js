const SortedSet = require("collections/sorted-set");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const INT_MAX = Number.MAX_SAFE_INTEGER;

// 변수 선언 및 입력:
const n = Number(input[0]);
const queries = input[1].split(" ").map(Number);

const s = new SortedSet();
let ans = INT_MAX;

// x = 0 위치에 점을 놓고 시작합니다.
s.push(0);

queries.forEach(x => {
    // 가장 근처에 있는 오른쪽 점을 찾습니다.
    const rightIdx = s.findLeastGreaterThan(x);
    // 존재한다면, 거리 중 최솟값을 갱신합니다.
    if (rightIdx) {
        ans = Math.min(ans, rightIdx.value - x);
    }

    // 가장 근처에 있는 왼쪽 점을 찾습니다.
    const leftIdx = s.findGreatestLessThanOrEqual(x);
    // 거리 중 최솟값을 갱신합니다.
    ans = Math.min(ans, x - leftIdx.value);

    // 해당 점을 treeset에 추가합니다.
    s.push(x);
    console.log(ans);
});