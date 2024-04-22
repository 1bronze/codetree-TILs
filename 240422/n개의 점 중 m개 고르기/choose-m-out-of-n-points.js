const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
let selectedPoints = [];

let ans = Number.MAX_SAFE_INTEGER;

function dist(p1, p2) {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    return (x1 - x2) ** 2 + (y1 - y2) ** 2;
}

function calc() {
  let maxDist = 0;

    // 가장 먼 거리를 반환합니다.
  for (let i = 0; i < m; i++)
    for (let j = 0; j < m; j++)
      if (i !== j)
        maxDist = Math.max(maxDist, dist(selectedPoints[i], selectedPoints[j]));

  return maxDist;
}

function findMin(idx, cnt) {
    if (cnt === m) {
        // 가장 먼 거리 중 최솟값을 선택합니다.
        ans = Math.min(ans, calc());
        return;
    }
    
    if (idx === n) {
        return;
    }
    
    // 점을 선택하는 경우입니다.
    selectedPoints.push(points[idx]);
    findMin(idx + 1, cnt + 1);
    selectedPoints.pop();
    
    // 점을 선택하지 않는 경우입니다.
    findMin(idx + 1, cnt);
}

findMin(0, 0);
console.log(ans);