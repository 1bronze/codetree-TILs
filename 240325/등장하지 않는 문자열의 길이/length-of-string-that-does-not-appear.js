const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const string = input[1];

let ans = 1;

// 1씩 늘려가면서 어느 길이까지 2번 등장하지는지 모두 시도해봅니다.
for (let i = 1; i < n; i++) {
    // 모든 길이가 i인 부분 문자열에 대해 쌍을 짓고
    // 둘이 완전히 똑같은지 확인합니다.
    
    // twice : i 길이의 2회 이상 등장하는 부분 문자열이 존재하면 true
    let twice = false;

    for (let j = 0; j < n - i + 1; j++) {
        for (let k = j + 1; k < n - i + 1; k++) {
            // isSame : j부터 i길이의 부분 문자열과
            // k부터 i길이의 부분 문자열이 완전히 같으면 true
            let isSame = true;

            for (let l = 0; l < i; l++) {
                if (string[j + l] !== string[k + l]) {
                    isSame = false;
                    break;
                }
            }

            if (isSame) {
                twice = true;
                break;
            }
        }

        if (twice) {
            break;
        }
    }

    if (twice) {
        ans = i + 1;
    } else {
        break;
    }
}

console.log(ans);