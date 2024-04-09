const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, q] = input[0].split(" ").map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(" "));
const commands = input.slice(1 + n, 1 + n + q).map(command => {
    const [row, dir] = command.split(" ");
    return [Number(row) - 1, dir];
    });

function move(row, dir) {
    if (dir === 'L') {
        let tmp = grid[row][m - 1];
        for (let x = m - 1; x > 0; x--) {
            grid[row][x] = grid[row][x - 1];
        }
        grid[row][0] = tmp;
    } else {
        let tmp = grid[row][0];
        for (let x = 0; x < m - 1; x++) {
            grid[row][x] = grid[row][x + 1];
        }
        grid[row][m - 1] = tmp;
    }
}

commands.forEach(([row, dir]) => {

    move(row, dir);

    // 윗방향으로 확산
    for (let nextRow = row - 1; nextRow >= 0; nextRow--) {
        let curRow = nextRow + 1;

        let isPossible = false;
        for (let x = 0; x < m; x++) {
            if (grid[curRow][x] === grid[nextRow][x]) {
                isPossible = true;
            }
        }

        if (isPossible) {
            let nextDir = (dir === 'L') ? (row % 2 === nextRow % 2 ? 'L' : 'R') : (row % 2 === nextRow % 2 ? 'R' : 'L');

            move(nextRow, nextDir);
        } else {
            break;
        }
    }

    // 아래방향으로 확산
    for (let nextRow = row + 1; nextRow < n; nextRow++) {
        let curRow = nextRow - 1;

        let isPossible = false;
        for (let x = 0; x < m; x++) {
            if (grid[curRow][x] === grid[nextRow][x]) {
                isPossible = true;
            }
        }

        if (isPossible) {
            let nextDir = (dir === 'L') ? (row % 2 === nextRow % 2 ? 'L' : 'R') : (row % 2 === nextRow % 2 ? 'R' : 'L');
            move(nextRow, nextDir);
        } else {
            break;
        }
    }
});

let ans = "";
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        ans += grid[i][j] + " ";
    }
    ans += "\n";
}
console.log(ans);