const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);

// index를 1번부터 사용하기 위해 m+1만큼 할당합니다.
const graph = Array.from(Array(n + 1), () => []);

let visited = Array(n + 1).fill(false);
let vertexCnt = 0;

function dfs(vertex) {
    // 해당 정점에서 이어져있는 모든 정점을 탐색해줍니다.
    graph[vertex].forEach(currV => {
        // 아직 간선이 존재하고 방문한 적이 없는 정점에 대해서만 탐색을 진행합니다.
        if (!visited[currV]) {
            visited[currV] = true;
            vertexCnt++;
            dfs(currV);
        }
    });
};

for (let i = 1; i <= m; i++) {
    const [v1, v2] = input[i].trim().split(' ').map(Number);

    // 각 정점이 서로 이동이 가능한 양방향 그래프이기 때문에 
    // 각 정점에 대한 간선을 각각 저장해줍니다.
    graph[v1].push(v2);
    graph[v2].push(v1);
}

visited[1] = true;
dfs(1);

console.log(vertexCnt);