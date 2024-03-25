const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = [...input[1]];

let ans = 1;

// 기준문자열 => (i, j)
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {

    }
}


// 길이가 i인 문자열 검색
for (let i = 1; i < arr.length; i++) {

    for (let j = 0; j + i - 1 < arr.length; j++) {
        // 기준문자열 str1
        let str1 = arr.slice(j, j + i).join("");

        for (let k = 0; k + i - 1 < arr.length; k++) {
            // 비교문자열 str2
            if (j == k) {
                continue;
            }
            let str2 = arr.slice(k, k+i).join("");

            if (str1 === str2) {
                ans = i + 1;
            }
        }
    }
}

console.log(ans);