class Tuple {
    constructor(pairSum, idx1, idx2) {
        this.pairSum = pairSum;
        this.idx1 = idx1;
        this.idx2 = idx2;
    }
}

const Heap = require('collections/heap');
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 입력 및 변수 선언:
const [n, m, k] = input[0].split(" ").map(Number);
const arr1 = input[1].trim().split(" ").map(Number);
const arr2 = input[2].trim().split(" ").map(Number);

const pq = new Heap(null, null, (a, b) => {
    if(a.pairSum !== b.pairSum)
        return b.pairSum - a.pairSum;  // pairSum 기준 오림차순 정렬
    else if(a.idx1 !== b.idx1)
        return b.idx1 - a.idx1;        // idx1 기준 오름차순 정렬
    else
        return b.idx2 - a.idx2;        // idx2 기준 오름차순 정렬
});

// 주어진 배열을 정렬해줍니다.
arr1.sort((a, b) => a - b);
arr2.sort((a, b) => a - b);

// 처음에는 n개의 원소에 대해 각각 
// 두 번째 수열의 첫 번째 원소를 대응시켜줍니다.
// 작은 값이 더 먼저 나와야 하므로
// +를 붙여서 넣어줍니다. 
for (let i = 0; i < n; i++)
    pq.push(new Tuple(arr1[i] + arr2[0], i, 0));

for (let i = 0; i < k - 1; i++) {
    const bestT = pq.pop();
    let idx1 = bestT.idx1;
    let idx2 = bestT.idx2;

    // 만약 첫 번째 수열의 idx1번째 원소와 더 매칭할 두 번째 수열의 원소가 남아있다면
    // 우선순위 큐에 넣어줍니다.
    idx2++;
    if (idx2 < m)
        pq.push(new Tuple(arr1[idx1] + arr2[idx2], idx1, idx2));
}

// k번째 합을 가져옵니다.
console.log(pq.peek().pairSum);