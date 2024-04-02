const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = [0, ...input[1].trim().split(' ').map(Number)];

function heapify(n, i) {
    let largest = i; // 최대 노드가 i번이라고 가정합니다.
    const l = i * 2; // 왼쪽 자식 노드 번호입니다.
    const r = i * 2 + 1; // 오른쪽 자식 노드 번호입니다.

    if (l <= n && arr[l] > arr[largest]) { // 왼쪽 자식이 크다면, 최대 번호를 수정합니다.
        largest = l;
    }

    if (r <= n && arr[r] > arr[largest]) { // 오른쪽 자식이 크다면, 최대 번호를 수정합니다.
        largest = r;
    }

    if (largest != i) { // 최대 노드가 자식 노드라면
                        // 해당 자식과 현재 노드를 교환해준 뒤
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // ES6 구조 분해 할당     
        heapify(n, largest); // 내려간 위치에서 다시 heapify를 진행합니다.
    }
}

function heapSort() {
    // 1. max-heap을 만들어 줍니다.
    for (let i = Math.floor(n / 2); i >= 1; i--) { // n / 2번째 원소부터 1번째 원소까지 돌며
        heapify(n, i); // heapify 과정을 진행하여 max-heap을 만들어줍니다.
    }

    // 2. 정렬을 진행합니다.
    for (let i = n; i >= 2; i--) { // n을 하나씩 줄여나가며
        [arr[1], arr[i]] = [arr[i], arr[1]]; // 현재 최댓값과 가장 끝에 있는 노드를 교환해주고
        heapify(i - 1, 1); // 1번 노드를 기준으로 heapify를 진행하여
                           // max-heap 상태를 계속 유지해 줍니다.
    }
}

heapSort();

// 출력
console.log(arr.slice(1).join(" "));