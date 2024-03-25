const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MAX_A = 3;
const MAX_X = 9;

// board 입력
const board = input.slice(0, MAX_A).map(line => line.split('').map(Number));

let ans = 0;

// 모든 쌍에 대해 전부 시도해 봅니다.
for (let i = 1; i <= MAX_X; i++) {
    for (let j = i + 1; j <= MAX_X; j++) {
        // i, j 두 명이 팀이 됐을 때 이길 수 있는지를 확인합니다.
        // win : 두 명이 팀이 됐을 때 이길 수 있다면 true
        let win = false;

        // 가로로 빙고가 만들어질 때
        for (let k = 0; k < MAX_A; k++) {
            let num_i = 0;
            let num_j = 0;
            for (let l = 0; l < MAX_A; l++) {
                if (board[k][l] === i) {
                    num_i += 1;
                }
                if (board[k][l] === j) {
                    num_j += 1;
                }
            }

            // 3개의 칸에 i, j가 총 3번 나오며
            // 둘 다 최소 1번 이상 나오면 승리
            if (num_i + num_j === 3 && num_i >= 1 && num_j >= 1) {
                win = true;
            }
        }

        // 세로로 빙고가 만들어질 때
        for (let k = 0; k < MAX_A; k++) {
            let num_i = 0;
            let num_j = 0;
            for (let l = 0; l < MAX_A; l++) {
                if (board[l][k] === i) {
                    num_i += 1;
                }
                if (board[l][k] === j) {
                    num_j += 1;
                }
            }

            // 3개의 칸에 i, j가 총 3번 나오며
            // 둘 다 최소 1번 이상 나오면 승리
            if (num_i + num_j === 3 && num_i >= 1 && num_j >= 1) {
                win = true;
            }
        }

        // 왼쪽 위에서 오른쪽 아래를 잇는 대각선으로 빙고가 만들어질 때
        let num_i = 0;
        let num_j = 0;
        for (let k = 0; k < MAX_A; k++) {
            if (board[k][k] === i) {
                num_i += 1;
            }
            if (board[k][k] === j) {
                num_j += 1;
            }
        }

        // 3개의 칸에 i, j가 총 3번 나오며
        // 둘 다 최소 1번 이상 나오면 승리
        if (num_i + num_j === 3 && num_i >= 1 && num_j >= 1) {
            win = true;
        }

        // 오른쪽 위에서 왼쪽 아래를 잇는 대각선으로 빙고가 만들어질 때
        num_i = 0;
        num_j = 0;
        for (let k = 0; k < MAX_A; k++) {
            if (board[k][MAX_A - k - 1] === i) {
                num_i += 1;
            }
            if (board[k][MAX_A - k - 1] === j) {
                num_j += 1;
            }
        }

        // 3개의 칸에 i, j가 총 3번 나오며
        // 둘 다 최소 1번 이상 나오면 승리
        if (num_i + num_j === 3 && num_i >= 1 && num_j >= 1) {
            win = true;
        }

        if (win) {
            ans += 1;
        }
    }
}

console.log(ans);