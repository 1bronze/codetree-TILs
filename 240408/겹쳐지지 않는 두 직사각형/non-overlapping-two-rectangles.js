const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

/*

하나의 직사각형은 x1, x2, y1, y2 좌표를 가짐.

두 직사각형을 A, B라고 하자.
A의 각 좌표를 a_x1, a_x2, a_y1, a_y2라고 하자. (x1<x2, y1<y2)
B의 각 좌표를 b_x1, b_x2, b_y1, b_y2라고 하자. (x1<x2, y1<y2)

이때 겹치지 않을 조건은
a_x2 < b_x1 || b_x2 < a_x1 || a_y2 < b_y1 || b_y2 < a_y1
*/

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

let ans = -1000000000;

function getSum(a_y1, a_y2, a_x1, a_x2, b_y1, b_y2, b_x1, b_x2) {
    let sum = 0;
    for (let y = a_y1; y <= a_y2; y++) {
        for (let x = a_x1; x <= a_x2; x++) {
            sum += grid[y][x];
        }
    }
    for (let y = b_y1; y <= b_y2; y++) {
        for (let x = b_x1; x <= b_x2; x++) {
            sum += grid[y][x];
        }
    }

    return sum;
}

for (let a_y1 = 0; a_y1 < n; a_y1++) {
    for (let a_y2 = a_y1; a_y2 < n; a_y2++) {

        for (let a_x1 = 0; a_x1 < m; a_x1++) {
            for (let a_x2 = a_x1; a_x2 < m; a_x2++) {

                for (let b_y1 = 0; b_y1 < n; b_y1++) {
                    for (let b_y2 = b_y1; b_y2 < n; b_y2++) {

                        for (let b_x1 = 0; b_x1 < m; b_x1++) {
                            for (let b_x2 = b_x1; b_x2 < m; b_x2++) {

                                if (a_x2 < b_x1 || b_x2 < a_x1 || a_y2 < b_y1 || b_y2 < a_y1)
                                    ans = Math.max(ans, getSum(a_y1, a_y2, a_x1, a_x2, b_y1, b_y2, b_x1, b_x2));
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log(ans);