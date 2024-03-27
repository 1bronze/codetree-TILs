/*
convert this python code to javascript

n = 10
board = [
    input()
    for _ in range(n)
]
    
# L, R, B의 위치를 찾습니다.
for i in range(n):
    for j in range(n):
        if board[i][j] == 'L':
            l_x = i
            l_y = j
        if board[i][j] == 'R':
            r_x = i
            r_y = j
        if board[i][j] == 'B':
            b_x = i
            b_y = j

# Case 1 : L과 B가 일직선상에 없다면, 반드시 L에서 B를 가는 최단경로중에
# R을 피해서 갈 수 있는 경로가 있습니다.
# 따라서 L과 B가 일직선상이 아니라면 L과 B의 최단경로를 구해주면 됩니다.
if l_x != b_x and l_y != b_y:
    print(abs(l_x - b_x) + abs(l_y - b_y) - 1)

# Case 2 : L과 B가 세로 방향으로 일직선상에 있다면,
# 그 일직선 사이에 R이 있을 때에는 2칸 돌아갑니다.
# 그 외의 모든 경우에 대해 L과 B의 최단경로를 그대로 구해주면 됩니다.
elif l_y == b_y:
    if l_y == r_y and r_x >= min(b_x, l_x) and r_x <= max(b_x, l_x):
        print(abs(l_x - b_x) + abs(l_y - b_y) + 1)
    else:
        print(abs(l_x - b_x) + abs(l_y - b_y) - 1)

# Case 3 : L과 B가 가로 방향으로 일직선상에 있다면,
# 그 일직선 사이에 R이 있을 때에는 2칸 돌아갑니다.
# 그 외의 모든 경우에 대해 L과 B의 최단경로를 그대로 구해주면 됩니다.
elif l_x == b_x:
    if l_x == r_x and r_y >= min(b_y, l_y) and r_y <= max(b_y, l_y):
        print(abs(l_x - b_x) + abs(l_y - b_y) + 1)
    else:
        print(abs(l_x - b_x) + abs(l_y - b_y) - 1)
 */

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = 10;
const board = Array.from({ length: n }, (_, i) => input[i]);

let l_x, l_y, r_x, r_y, b_x, b_y;

// L, R, B의 위치를 찾습니다.
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (board[i][j] === 'L') {
            l_x = i;
            l_y = j;
        }
        if (board[i][j] === 'R') {
            r_x = i;
            r_y = j;
        }
        if (board[i][j] === 'B') {
            b_x = i;
            b_y = j;
        }
    }
}

// Case 1 : L과 B가 일직선상에 없다면, 반드시 L에서 B를 가는 최단경로중에
// R을 피해서 갈 수 있는 경로가 있습니다.
// 따라서 L과 B가 일직선상이 아니라면 L과 B의 최단경로를 구해주면 됩니다.
if (l_x !== b_x && l_y !== b_y) {
    console.log(Math.abs(l_x - b_x) + Math.abs(l_y - b_y) - 1);
}

// Case 2 : L과 B가 세로 방향으로 일직선상에 있다면,
// 그 일직선 사이에 R이 있을 때에는 2칸 돌아갑니다.
// 그 외의 모든 경우에 대해 L과 B의 최단경로를 그대로 구해주면 됩니다.
else if (l_y === b_y) {
    if (l_y === r_y && r_x >= Math.min(b_x, l_x) && r_x <= Math.max(b_x, l_x)) {
        console.log(Math.abs(l_x - b_x) + Math.abs(l_y - b_y) + 1);
    } else {
        console.log(Math.abs(l_x - b_x) + Math.abs(l_y - b_y) - 1);
    }
}

// Case 3 : L과 B가 가로 방향으로 일직선상에 있다면,
// 그 일직선 사이에 R이 있을 때에는 2칸 돌아갑니다.
// 그 외의 모든 경우에 대해 L과 B의 최단경로를 그대로 구해주면 됩니다.
else if (l_x === b_x) {
    if (l_x === r_x && r_y >= Math.min(b_y, l_y) && r_y <= Math.max(b_y, l_y)) {
        console.log(Math.abs(l_x - b_x) + Math.abs(l_y - b_y) + 1);
    } else {
        console.log(Math.abs(l_x - b_x) + Math.abs(l_y - b_y) - 1);
    }
}