const SortedMap = require("collections/sorted-map");

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const firstAppear = new SortedMap();

for (let i = 0; i < n; i++) {
    // 만약 a가 처음으로 등장했다면
    // 그 위치를 map에 저장합니다.
    if (!firstAppear.has(arr[i]))
        firstAppear.set(arr[i], i + 1);
}

// 순서대로 데이터를 순회합니다.
for (let [num, cnt] of firstAppear.entries())
    console.log(num, cnt);