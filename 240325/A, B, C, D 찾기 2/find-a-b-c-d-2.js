const MAX_A = 40;

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
const arr = input;

// 모든 a, b, c, d를 확인해서
// 이 합들이 arr과 같은지 여부를 확인합니다.
for (let a = 1; a <= MAX_A; a++) {
    for (let b = a; b <= MAX_A; b++) {
        for (let c = b; c <= MAX_A; c++) {
            for (let d = c; d <= MAX_A; d++) {
                let arr2 = [a, b, c, d, a + b, b + c, c + d, d + a,
                    a + c, b + d, a + b + c, a + b + d, a + c + d, b + c + d,
                    a + b + c + d];
                
                    sortedArr1 = arr.sort((x, y) => x - y).join(',')
                    sortedArr2 = arr2.sort((x, y) => x - y).join(',')

                if (sortedArr1 === sortedArr2) {
                    // 만약 두 배열이 완전히 같다면 a, b, c, d조합을 찾아냈습니다.
                    console.log(a, b, c, d);
                }
            }
        }
    }
}