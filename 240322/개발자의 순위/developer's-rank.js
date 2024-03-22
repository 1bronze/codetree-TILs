const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);
const arr = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

let ans = 0;

// 모든 쌍에 대해서 불변의 순위인 쌍을 찾습니다.
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        // i번 개발자가 j번 개발자보다 항상 높은 순위인지 여부를 확인합니다.
        
        // i와 j가 같을 경우 넘어갑니다.
        if (i === j) {
            continue;
        }
        
        // correct: i번 개발자가 j번 개발자보다 항상 높은 순위일때 true
        let correct = true;

        // k번의 모든 경기에 대해서 두 개발자의 위치를 찾고,
        // 하나라도 i번 개발자가 더 뒤에 있으면 correct를 false로 바꿉니다.
        for (let list of arr) {
            const indexI = list.indexOf(i);
            const indexJ = list.indexOf(j);

            if (indexI > indexJ) {
                correct = false;
            }
        }

        if (correct) {
            ans += 1;
        }
    }
}

console.log(ans);