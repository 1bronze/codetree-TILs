const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = 10;
const board = Array.from({ length: n }, (_, i) => input[i]);

let lX, lY, rX, rY, bX, bY;

// L, R, B의 위치를 찾습니다.
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (board[i][j] === 'L') {
            lX = i;
            lY = j;
        }
        if (board[i][j] === 'R') {
            rX = i;
            rY = j;
        }
        if (board[i][j] === 'B') {
            bX = i;
            bY = j;
        }
    }
}

// Case 1 : L과 B가 일직선상에 없다면, 반드시 L에서 B를 가는 최단경로중에
// R을 피해서 갈 수 있는 경로가 있습니다.
// 따라서 L과 B가 일직선상이 아니라면 L과 B의 최단경로를 구해주면 됩니다.
if (lX !== bX && lY !== bY) {
    console.log(Math.abs(lX - bX) + Math.abs(lY - bY) - 1);
}

// Case 2 : L과 B가 세로 방향으로 일직선상에 있다면,
// 그 일직선 사이에 R이 있을 때에는 2칸 돌아갑니다.
// 그 외의 모든 경우에 대해 L과 B의 최단경로를 그대로 구해주면 됩니다.
else if (lY === bY) {
    if (lY === rY && rX >= Math.min(bX, lX) && rX <= Math.max(bX, lX)) {
        console.log(Math.abs(lX - bX) + Math.abs(lY - bY) + 1);
    } else {
        console.log(Math.abs(lX - bX) + Math.abs(lY - bY) - 1);
    }
}

// Case 3 : L과 B가 가로 방향으로 일직선상에 있다면,
// 그 일직선 사이에 R이 있을 때에는 2칸 돌아갑니다.
// 그 외의 모든 경우에 대해 L과 B의 최단경로를 그대로 구해주면 됩니다.
else if (lX === bX) {
    if (lX === rX && rY >= Math.min(bY, lY) && rY <= Math.max(bY, lY)) {
        console.log(Math.abs(lX - bX) + Math.abs(lY - bY) + 1);
    } else {
        console.log(Math.abs(lX - bX) + Math.abs(lY - bY) - 1);
    }
}