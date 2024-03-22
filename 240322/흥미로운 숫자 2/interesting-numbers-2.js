const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [x, y] = input;

let ans = 0;

// 각 숫자에 대해 
// 흥미로운 숫자인지 아닌지 여부를 판단합니다.
for (let i = x; i <= y; i++) {
    // digit 배열을 만들어 각 자리 숫자의 개수를 저장합니다.
    // allDigits에는 총 자릿수의 개수를 저장합니다.
    let num = i;
    const digit = Array(10).fill(0);
    let allDigits = 0;
    while (num > 0) {
        digit[num % 10] += 1;
        allDigits += 1;
        num = Math.floor(num / 10);
    }
    
    // interesting : i가 흥미로운 숫자이면 true, 아니면 false
    let interesting = false;
    
    // 흥미로운 숫자가 되기 위해서는,
    // 숫자 하나만 allDigits - 1회 등장해야 합니다.
    for (let j = 0; j < 10; j++) {
        if (digit[j] === allDigits - 1) {
            interesting = true;
        }
    }
    
    if (interesting) {
        ans += 1;
    }
}

console.log(ans);