const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const [n, m] = input[0].split(' ').map(Number);
const A = input[1].trim().split(' ').map(Number);
const B = input[2].trim().split(' ').map(Number);

let ans = n + m;

// 수열 A의 원소를 전부 HashSet에 넣어줍니다.
const set1 = new Set(A);

// 수열 B의 각 원소가 첫 번째 수열에 들어있는지를 확인합니다.
B.forEach(elem2 => {
    // 만약 들어있다면 수열 A와 수열 B에 모두 있는 값입니다.
    // 이는 대칭 차집합의 원소가 아니므로 정답의 개수에서 지워줍니다.
    if (set1.has(elem2)) {
        ans -= 2;
    }
});

// 대칭 차집합의 원소의 개수를 출력합니다.
console.log(ans);