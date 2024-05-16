const SortedSet = require("collections/sorted-set");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const INT_MAX = Number.MAX_SAFE_INTEGER;

// 변수 선언 및 입력:
const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1, 1 + n).map(Number);

// 입력으로 주어진 숫자를 전부 treeset에 넣어줍니다.
const s = new SortedSet();
for (let elem of arr)
    s.push(elem);

// 답을 저장합니다.
let ans = INT_MAX;

// 각 숫자 x 대해
// x보다 m 이상 더 크면서 가장 작은 값과
// x보다 m 이상 더 작으면서 가장 큰 값을 구해
// 차이가 가장 작은 경우를 갱신합니다.
arr.forEach(x => {
    // x보다 m 이상 더 크면서 가장 작은 값은
    // r - x >= m를 만족하는 최소 r이므로
    // r >= m + x을 만족하는 최소 r을 구하면 됩니다.
    const minIdx = s.findLeastGreaterThanOrEqual(m + x);
    if (minIdx) {
        ans = Math.min(ans, minIdx.value - x);
    }

    // x보다 m 이상 더 작으면서 가장 큰 값은
    // x - r >= m를 만족하는 최대 r이므로
    // r <= x - m을 만족하는 최대 r을 구하면 됩니다.
    const maxIdx = s.findGreatestLessThanOrEqual(x - m);
    if (maxIdx) {
        ans = Math.min(ans, x - maxIdx.value);
    }
});

// 불가능하다면 -1을 넣어줍니다.
if (ans === INT_MAX) {
    ans = -1;
}

console.log(ans);