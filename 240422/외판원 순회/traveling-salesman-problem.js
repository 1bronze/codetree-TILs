const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const cost = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const visited = Array(n).fill(false);
let picked = [];

let ans = Number.MAX_SAFE_INTEGER;

// 지금까지 방문한 지점의 수를 cnt라 했을 때
// 계속 탐색을 이어서 진행합니다.
function findMin(cnt) {
    // 모든 지점를 방문했을 때
    // 가능한 지금까지의 비용 합 중
    // 최솟값을 갱신합니다.
    if (cnt === n) {
        let totalCost = 0;
        for (let i = 0; i < n - 1; i++) {
            let currCost = cost[picked[i]][picked[i + 1]];
            // 만약 비용이 0이라면 불가능한 경우이므로 
            // 바로 함수를 빠져나옵니다.
            if (currCost === 0) {
                return;
            }
            
            totalCost += currCost;
        }

        // 최종적으로 1번 지점으로 다시 돌아오는 것 까지 고려해서 계산해줍니다.
        let additionalCost = cost[picked[n - 1]][0];
        if (additionalCost === 0) {
            return;
        }

        // 답을 갱신해줍니다.
        ans = Math.min(ans, totalCost + additionalCost);
        return;
    }

    // 방문할 지점을 선택합니다.
    for (let i = 0; i < n; i++) {
        if (visited[i]) {
            continue;
        }
        
        visited[i] = true;
        picked.push(i);

        findMin(cnt + 1);

        visited[i] = false;
        picked.pop();
    }
}
   
// 1번 지점을 시작으로
// 탐색을 진행합니다.
visited[0] = true;
picked.push(0);
findMin(1);

console.log(ans);