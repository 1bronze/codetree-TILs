const Heap = require('collections/heap');
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const t = Number(input[0]);
let index = 1;

function findMedian(arr, m) {
    // 중앙값(median)을 계속 관리해줍니다.
    // 중앙값보다 작은 숫자들을 max heap으로 관리하며 (maxPQ)
    // 중앙값보다 큰 숫자들을 min heap으로 관리하여 (minPQ)
    // 새로운 숫자가 추가될 때마다 
    // 그에 따라 median, maxPQ, minPQ를 업데이트 해주면 됩니다.
    let median = arr[0];
    let maxPQ = new Heap(null, null, (a, b) => a - b); // for max heap
    let minPQ = new Heap(null, null, (a, b) => b - a); // for min heap
    let answer = [];

    answer.push(median);

    for (let i = 1; i < m; i++) {
        // Case 1.
        // 짝수 번째에 새로운 숫자가 주어졌을 경우에는
        // 양쪽 maxPQ, minPQ에 들어있는 원소의 수가 
        // 정확히 동일할 것이므로
        // 중앙값은 그대로 두고
        // median과 arr[i]값을 비교하여
        // arr[i] < median이라면 maxPQ에
        // arr[i] > median이라면 minPQ에 넣어줍니다.
        if (i % 2 === 1) {
            if (arr[i] < median) {
                maxPQ.push(arr[i]);
            } else {
                minPQ.push(arr[i]);
            }
        } 
        // Case 2.
        // 홀수 번째에 새로운 숫자가 주어졌을 경우에는
        // maxPQ, minPQ 중 개수가 1개 더 많은 곳이
        // 어디인지에 따라 다른 전략을 취해줍니다.
        else {    
            // Step 1. 
            // 먼저 maxPQ, minPQ 중 개수가 1개 더 많은 쪽에
            // 있는 곳에서 우선순위가 가장 큰 값을 뽑아줍니다.
            // 이를 newCand라 하겠습니다.
            let newCand;
            if (maxPQ.length > minPQ.length) {
                newCand = maxPQ.pop();
            } else {
                newCand = minPQ.pop();
            }

            // Step 2.
            // 이제 maxPQ, minPQ에 들어있는 숫자의 개수는 정확히
            // 동일할 것입니다.
            // 여기서 우리가 해야 할 일은
            // median, arr[i], newCand에서
            // 가장 작은 값은 maxPQ에
            // 가운데 값은 median에 다시 넣어주고
            // 가장 큰 값은 minPQ에 넣어줘야 하는 것입니다.
            // 이를 정렬을 이용하면 편하게 구현이 가능합니다.
            const nums = [median, arr[i], newCand].sort((a, b) => a - b);

            // 순서대로 값을 넣어줍니다.
            maxPQ.push(nums[0]);
            median = nums[1];
            minPQ.push(nums[2]);

            // 홀수 번째의 경우에는 중앙값을 출력해줍니다.
            answer.push(median);
        }
    }

    console.log(answer.join(" "));
}

for (let i = 0; i < t; i++) {
    const m = Number(input[index++]);
    const arr = input[index++].split(" ").map(Number);

    // 홀수 번째마다 중앙값을 찾는 것을 반복합니다.
    findMedian(arr, m);
}