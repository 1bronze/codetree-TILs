const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, t] = input[0].split(' ').map(Number);
let l = input[1].trim().split(' ').map(Number);
let r = input[2].trim().split(' ').map(Number);
let d = input[3].trim().split(' ').map(Number);

for (let _ = 0; _ < t; _++) {
    // Step 1
    // 왼쪽에서 가장 오른쪽에 있는 숫자를 따로 temp값에 저장해놓습니다.
    let temp = l[n - 1];

    // Step 2
    // 왼쪽에 있는 숫자들을 완성합니다. 
    // 벨트를 기준으로 오른쪽에서부터 채워넣어야 하며, 
    // 맨 왼쪽 숫자는 아래에서 가져와야함에 유의합니다.
    for (let i = n - 1; i > 0; i--) {
        l[i] = l[i - 1];
    }
    l[0] = d[n - 1];

    // Step 3
    // 오른쪽에 있는 숫자들을 완성합니다. 
    // 벨트를 기준으로 마찬가지로 오른쪽에서부터 채워넣어야 하며, 
    // 맨 왼쪽 숫자는 이전 단계에서 미리 저장해놨던 temp값을 가져와야함에 유의합니다.
    let temp2 = r[n - 1];
    for (let i = n - 1; i > 0; i--) {
        r[i] = r[i - 1];
    }
    r[0] = temp;

    // Step 4
    // 아래에 있는 숫자들을 완성합니다. 
    // 마찬가지로 벨트를 기준으로 오른쪽에서부터 채워넣어야 하며, 
    // 맨 왼쪽 숫자는 이전 단계에서 미리 저장해놨던 temp값을 가져와야함에 유의합니다.
    for (let i = n - 1; i > 0; i--) {
        d[i] = d[i - 1];
    }
    d[0] = temp2;
}

// 출력
console.log(l.join(' '));
console.log(r.join(' '));
console.log(d.join(' '));