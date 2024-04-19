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
    // 수열의 가장 앞부터 각 인덱스가 시작점일 때
    // 인접한 연속 부분 수열이 동일한 경우가 있는지를 탐색합니다.
    for (let idx = 0; idx < series.length; idx++) {
        // 가능한 연속 부분 수열의 길이 범위를 탐색합니다.
        let length = 1;
        while (true) {
            // 연속 부분 수열의 시작과 끝 인덱스를 설정하여 줍니다.
            let start1 = idx, end1 = idx + length - 1;
            let start2 = end1 + 1, end2 = (end1 + 1) + length - 1;
            
            // 두번째 연속 부분 수열의 끝 인덱스가 범위를 넘어가면 탐색을 종료합니다.
            if (end2 >= series.length) break;
            
            // 인접한 연속 부분 수열이 같은지 여부를 확인합니다.
            if (isEqual(start1, end1, start2, end2)) {
                return false;
            }
            
            length += 1;
        }
    }
    
    return true;
}


function findMinSeries(cnt) {
    // n개의 숫자가 선택됐을 때 불가능한 수열인 경우 탐색을 종료합니다.
    // 가능한 수열인 경우 이를 출력하고 프로그램을 종료합니다.
    if (cnt === n) {
        if (!isPossibleSeries()) {
            return;
        }
        
        console.log(series.join(''));
        process.exit(0);
    }
    
    // 사용 가능한 각 숫자가 뽑혔을 때의 경우를 탐색합니다.
    numbers.forEach(number => {
        series.push(number);
        findMinSeries(cnt + 1);
        series.pop();
    });
}

findMinSeries(0);