const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const [n, m] = input[0].split(' ').map(Number);
const A = input.slice(1, n + 1);
const B = input.slice(n + 1, 2 * n + 1);

let ans = 0;
const s = new Set();

function testLocation(x, y, z) {
    // x, y, z번째 자릿수를 선택했을 때 A와 B 그룹이
    // 완벽하게 구분되면 true, 그렇지 않다면 false를 반환합니다.
    s.clear();

    // A의 원소를 전부 HashSet에 넣어줍니다.
    for (let i = 0; i < n; i++) {
        s.add(A[i][x] + A[i][y] + A[i][z]);
    }
    
    // B의 원소 중 하나라도 A와 같은 경우가 있다면
    // A와 B를 구분해낼 수 없습니다.
    for (let i = 0; i < n; i++) {
        if (s.has(B[i][x] + B[i][y] + B[i][z])) {
            return false;
        }
    }
    
    // 모든 B의 원소가 A와 다르다면 A와 B를 구분해낼 수 있습니다.
    return true;
}

// 서로 다른 세 자리의 조합을 모두 순회합니다.
for (let i = 0; i < m; i++) {
    for (let j = i + 1; j < m; j++) {
        for (let k = j + 1; k < m; k++) {
            // i, j, k 번째 자리를 선택했을 때 두 그룹을
            // 완벽하게 구분할 수 있는지 확인합니다.
            if (testLocation(i, j, k)) ans += 1;
        }
    }
}

// 두 그룹을 구분해낼 수 있는 조합 수를 출력합니다.
console.log(ans);