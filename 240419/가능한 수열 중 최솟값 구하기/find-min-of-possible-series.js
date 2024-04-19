const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const numbers = [4, 5, 6];

let series = [];

// 시작과 끝 인덱스가 주어진 두 수열이 동일한지 여부를 판별합니다.
function isEqual(start1, end1, start2, end2) {
    for(let i = 0; i <= end1 - start1; i++) {
        if(series[start1 + i] !== series[start2 + i])
            return false;
    }

    return true;
}

// 가능한 수열인지 여부를 판별합니다.
function isPossibleSeries() {
    // 가능한 연속 부분 수열의 길이 범위를 탐색합니다.
    let length = 1;
    while (true) {
        // 연속 부분 수열의 시작과 끝 인덱스를 설정하여 줍니다.
        let start1 = series.length - length, end1 = series.length - 1;
        let start2 = start1 - length, end2 = start1 - 1;

        if (start2 < 0) {
            break;
        }

        // 인접한 연속 부분 수열이 같은지 여부를 확인합니다.
        if (isEqual(start1, end1, start2, end2)) {
            return false;
        }

        length += 1;
    }
    
    return true;
}

function findMinSeries(cnt) {
    // n개의 숫자가 선택됐을 때 불가능한 수열인 경우 탐색을 종료합니다.
    // 가능한 수열인 경우 이를 출력하고 프로그램을 종료합니다.
    if (cnt === n) {
        console.log(series.join(''));
        process.exit(0);
    }
    
    // 사용 가능한 각 숫자가 뽑혔을 때의 경우를 탐색합니다.
    numbers.forEach(number => {
        series.push(number);
        // 해당 시점까지 만들 수열이 조건을 만족하는 경우에만
        // 탐색을 진행합니다.
        if (isPossibleSeries()) {
            findMinSeries(cnt + 1);
        }
        series.pop();
    });
}

findMinSeries(0);