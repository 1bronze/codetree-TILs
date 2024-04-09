const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, t] = input[0].split(' ').map(Number);
let u = input[1].trim().split(' ').map(Number);
let d = input[2].trim().split(' ').map(Number);

for(let _ = 0; _ < t; _++) {
    // Step 1
    // 위에서 가장 오른쪽에 있는 숫자를 따로 temp값에 저장해놓습니다.
    let temp = u[n - 1];

    // Step 2
    // 위에 있는 숫자들을 완성합니다. 
    // 오른쪽에서부터 채워넣어야 하며, 
    // 맨 왼쪽 숫자는 아래에서 가져와야함에 유의합니다.
    for(let i = n - 1; i > 0; i--) {
        u[i] = u[i - 1];
    }
    u[0] = d[n - 1];

    // Step 3
    // 아래에 있는 숫자들을 완성합니다. 
    // 마찬가지로 오른쪽에서부터 채워넣어야 하며, 
    // 맨 왼쪽 숫자는 위에서 미리 저장해놨던 temp값을 가져와야함에 유의합니다.
    for(let i = n - 1; i > 0; i--) {
        d[i] = d[i - 1];
    }
    d[0] = temp;
}

// 출력
console.log(u.join(' '));
console.log(d.join(' '));