const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const freq = new Map();
let ans = 0;

// 각 숫자가 몇 번씩 나왔는지를
// hashmap에 기록해줍니다.
arr.forEach(elem => {
    if (freq.has(elem))
        freq.set(elem, freq.get(elem) + 1);
    else
        freq.set(elem, 1);
})

// 배열을 앞에서부터 순회하며 쌍을 만들어줍니다.
for (let i = 0; i < n; i++) {
    // 이미 순회한 적이 있는 숫자는 빼 버림으로서
    // 같은 조합이 여러번 세어지는 걸 방지합니다.
    if (!freq.has(arr[i]))
        freq.set(arr[i], -1);
    else
        freq.set(arr[i], freq.get(arr[i]) - 1);

    for (let j = 0; j < i; j++) {
        // 전처리를 해주었기 때문에 이미 순회한 적 있는 값은 hashmap에 없습니다.
        // 이와 같은 방식으로 같은 조합이 중복되어 세어지는 걸 방지할 수 있습니다.
        if (freq.has(k - arr[i] - arr[j]))
            ans += freq.get(k - arr[i] - arr[j]);
    }
}

console.log(ans);