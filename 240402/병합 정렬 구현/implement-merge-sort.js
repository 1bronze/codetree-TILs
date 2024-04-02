const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);
const mergedArr = Array(n).fill(0);

function merge(low, mid, high) {
    let i = low, j = mid + 1; // 각 리스트 내의 원소 위치를 잡습니다.
    
    let k = low; // 병합 시 원소를 담을 위치를 유지합니다.
    while (i <= mid && j <= high) { // 두 리스트 내의 원소가 아직 남아있다면
        if (arr[i] <= arr[j]) { // 첫 번째 리스트 내의 원소가 더 작다면
            mergedArr[k++] = arr[i++]; // 해당 원소를 옮겨줍니다.
        } else {
            mergedArr[k++] = arr[j++]; // 그렇지 않다면 두 번째 리스트 내의 원소를 옮겨줍니다.
        }
    }

    while (i <= mid) { // 아직 첫 번째 리스트 내 원소가 남아있다면
        mergedArr[k++] = arr[i++]; // 남은 원소들을 전부 옮겨줍니다.
    }
    
    while (j <= high) { // 아직 두 번째 리스트 내 원소가 남아있다면
        mergedArr[k++] = arr[j++]; // 남은 원소들을 전부 옮겨줍니다.
    }
    
    for (k = low; k <= high; k++) { // 병합된 리스트를 다시
        arr[k] = mergedArr[k]; // 원본 리스트에 옮겨줍니다.
    }
}

function mergeSort(low, high) {
    if (low < high) { // 원소의 개수가 2개 이상인 경우에만 진행
        const mid = Math.floor((low + high) / 2); // 가운데 원소의 위치
        mergeSort(low, mid); // 왼쪽 부분에 대해 병합정렬 진행
        mergeSort(mid + 1, high); // 우측 부분에 대해 병합정렬 진행
        merge(low, mid, high); // 정렬된 두 리스트를 하나로 병합
    }
}

mergeSort(0, n - 1);

// 출력
console.log(arr.join(" "));