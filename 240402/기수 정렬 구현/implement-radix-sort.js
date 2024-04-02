const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const maxK = 6;
const maxDigit = 10;

// 변수 선언 및 입력
const n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

function radixSort() {
    let p = 1;
    for (let pos = 0; pos < maxK; pos++) {
        const arrNew = Array.from({length: maxDigit}, () => []);
        arr.forEach(elem => {
            const digit = Math.floor(elem / p) % 10;
            arrNew[digit].push(elem);
        });

        arr = [];
        arrNew.forEach(bucket => {
            bucket.forEach(elem => {
                arr.push(elem);
            });
        });
        
        p *= 10;
    }
}

radixSort();

console.log(arr.join(' '));