const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const COIN_NUM = 9;
const INT_MAX = Number.MAX_SAFE_INTEGER;

// 변수 선언 및 입력
const n = Number(input[0]);
const m = 3;
const grid = input.slice(1, 1 + n);

let coinPos = [];
let selectedPos = [];

let startPos = [-1, -1];
let endPos = [-1, -1];

let ans = INT_MAX;

function dist(a, b) {
    const [ax, ay] = a;
    const [bx, by] = b;
    return Math.abs(ax - bx) + Math.abs(ay - by);
}

function calc() {
    let numMoves = dist(startPos, selectedPos[0]);
    for (let i = 0; i < m - 1; i++) {
        numMoves += dist(selectedPos[i], selectedPos[i + 1]);
    }
    numMoves += dist(selectedPos[m - 1], endPos);
    
    return numMoves;
}

function findMinMoves(currIdx, cnt) {
    if (cnt === m) {
        // 선택된 모든 조합에 대해 이동 횟수를 계산합니다.
        ans = Math.min(ans, calc());
        return;
    }
    
    if (currIdx === coinPos.length) {
        return;
    }
    
    // currIdx index에 있는 동전을 선택하지 않은 경우
    findMinMoves(currIdx + 1, cnt);
    
    // currIdx index에 있는 동전을 선택한 경우
    selectedPos.push(coinPos[currIdx]);
    findMinMoves(currIdx + 1, cnt + 1);
    selectedPos.pop();
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (grid[i][j] === 'S') {
            startPos = [i, j];
        }
        if (grid[i][j] === 'E') {
            endPos = [i, j];
        }
    }
}

// 동전을 오름차순으로 각 위치를 집어넣습니다.
// 이후에 증가하는 순서대로 방문하기 위함입니다.
for (let num = 1; num <= COIN_NUM; num++) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === String(num)) {
                coinPos.push([i, j]);
            }
        }
    }
}

findMinMoves(0, 0);

if (ans === INT_MAX) {
    ans = -1;
}

console.log(ans);