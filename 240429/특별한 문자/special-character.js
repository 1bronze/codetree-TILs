const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const str = input[0];
const count = new Map();

// 각 알파벳이 몇 번씩 나왔는지를
// hashmap에 기록해줍니다.
str.split('').forEach(elem => {
    if (count.has(elem))
        count.set(elem, count.get(elem) + 1);
    else
        count.set(elem, 1);
});

// 문자열을 앞에서부터 순회하여
// 딱 1회만 등장한 알파벳을 찾습니다.
str.split('').forEach(elem => {
    if (count.get(elem) === 1) {
        // 만약 그런 알파벳이 존재한다면,
        // 알파벳을 출력하고 프로그램을 종료합니다.
        console.log(elem);
        process.exit();
    }
})

// 문자열을 전부 순회할 때까지 프로그램이 종료되지
// 않았으므로 그러한 문자가 없는 경우입니다.
console.log("None");