const SortedSet = require("collections/sorted-set");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 입력
const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number);

// 변수 선언
const s = new SortedSet();

// treeset에 숫자들을 넣어줍니다.
arr.forEach(elem => s.push(elem));

arr2.forEach(elem => {
    // 같거나 작은 최초의 숫자를 찾습니다.
    const idx = s.findGreatestLessThanOrEqual(elem);

    if (idx) {
        // 존재하는 경우에는 해당 값을 출력한 뒤 제거합니다.
        console.log(idx.value);
        s.remove(idx.index);
    } else {
        // 존재하지 않는 경우에는 -1을 출력합니다.
        console.log(-1);
    }
})