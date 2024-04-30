const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 입력:
const [n, k] = input[0].split(' ').map(Number);
const change = input.slice(1, 1 + k).map(line => line.split(' ').map(Number));

// 변수 선언
const s = Array.from(Array(n + 1), () => new Set());
const ans = Array(n + 1).fill(0);

// 시작 array를 arr에 표시합니다.
const arr = Array(n + 1).fill(0);
for (let i = 1; i <= n; i++)
    arr[i] = i;

for (let i = 1; i <= n; i++) {
    // 각 i 숫자가 위치할 수 있는 자리를 HashSet에 넣어 저장합니다.
    s[i].add(i);
    ans[i] = 1;
}

// 3k번 자리를 바꿉니다.
for (let _ = 0; _ < 3; _++) {
    change.forEach(([a, b]) => {
        // a와 b의 자리를 바꿔줍니다.
        // 이때 자리가 변화한 값은 arr[a]와 arr[b]밖에 없습니다.
        // 이 값들만 새로운 자리를 HashSet에 넣어 저장합니다.
        [arr[a], arr[b]] = [arr[b], arr[a]];

        if (!s[arr[a]].has(a)) {
            s[arr[a]].add(a);
            ans[arr[a]] += 1;
        }

        if (!s[arr[b]].has(b)) {
            s[arr[b]].add(b);
            ans[arr[b]] += 1;
        }
    });
}

// 3k번 자리를 바꾸면서 각 숫자들이 위치할 수 있는 값들의 개수를 ans 배열에서 확인합니다.
for (let i = 1; i <= n; i++) {
    console.log(ans[i]);
}