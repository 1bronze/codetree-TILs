const SortedSet = require("collections/sorted-set");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 입력 및 변수 선언:
const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const s = new SortedSet();

// 입력받은 수들을 treeset에 넣어줍니다.
arr.forEach(x => {
    s.push(x);
});

// cnt : 출력한 숫자의 개수
let cnt = 0;

// result : 출력할 숫자 목록
let result = [];

// 가장 큰 k개의 숫자를 출력합니다.
for(let i = 0; i < k; i++)
    result.push(s.pop());
    
console.log(result.join(" "));