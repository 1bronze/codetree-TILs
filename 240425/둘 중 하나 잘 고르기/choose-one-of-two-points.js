const INT_MIN = Number.MIN_SAFE_INTEGER;

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력
const n = Number(input[0]);
const red = new Array(2 * n + 1).fill(0);
const blue = new Array(2 * n + 1).fill(0);

for (let i = 1; i <= 2 * n; i++) {
    const [r, b] = input[i].split(' ').map(Number);
    red[i] = r;
    blue[i] = b;
}

// dp[i][j] :
// i번째 카드 쌍까지 고려해봤을 때
// 지금까지 빨간색 카드를 정확히 j장 뽑았다 했을 때
// 얻을 수 있는 뽑힌 숫자들의 최대 합
const dp = Array.from(Array(2 * n + 1), () => new Array(2 * n + 1).fill(0));

function initialize() {
    // 최대를 구하는 문제이므로,
    // 초기에는 전부 INT_MIN을 넣어줍니다.
    for (let i = 0; i < 2 * n + 1; i++) {
        for (let j = 0; j < 2 * n + 1; j++) {
            dp[i][j] = INT_MIN;
        }
    }
    
    // 0번째 카드 쌍까지 고려해봤을 때에는
    // 아직 고른 카드가 없기 때문에
    // 빨간색 카드를 0개를 뽑은 상황에
    // 뽑은 숫자들의 합은 0입니다.
    dp[0][0] = 0;
}

initialize();

for (let i = 1; i < 2 * n + 1; i++) {
    // i개의 카드 쌍에 대해 전부 카드 선택을 완료했을 때
    // 지금까지 뽑은 빨간색 카드 수가 j일 때
    // 가능한 선택한 카드 숫자의 최대합을 계산합니다.

    // 이러한 상황을 만들기 위한 선택지는 크게 2가지 입니다.
    for (let j = 0; j < i + 1; j++) {
        // Case 1
        // i번째 카드 쌍에서 빨간색 카드를 선택하여
        // 최종적으로 빨간색이 j개가 된 경우입니다.
        // 따라서 i - 1번째 카드 쌍 까지는 빨간색을 j - 1개 뽑았어야 비로소
        // i번째에 빨간색 카드를 선택하게 되므로서 빨간색이 j개가 될 수 있습니다.
        // 이 경우 dp[i - 1][j - 1] 에 i번째 카드 쌍 중 빨간색 카드에 적혀있는 숫자인
        // red[i]를 더한 것이 한 가지 경우가 됩니다.
        // 당연히 j가 0보다 커야지만이 만들어질 수 있는 경우입니다.
        if (j > 0) {
            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + red[i]);
        }
        
        // Case 2
        // i번째 카드 쌍에서 파란색 카드를 선택하여
        // 최종적으로 빨간색이 j개가 된 경우입니다.
        // 따라서 i - 1번째 카드 쌍 까지는 빨간색을 j개 뽑았어야
        // i번째에 파란색 카드를 선택하게 되므로서 빨간색이 그대로 j개가 될 수 있습니다.
        // 이 경우 dp[i - 1][j] 에 i번째 카드 쌍 중 파란색 카드에 적혀있는 숫자인
        // blue[i]를 더한 것이 한 가지 경우가 됩니다.
        // 당연히 i - j가 0보다 커야지만이 만들어질 수 있는 경우입니다.
        if (i - j > 0) {
            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j] + blue[i]);
        }
    }
}

// 총 2 * n개의 카드 쌍에 대해 전부 카드 선택을 완료했을 때
// 빨간색 카드를 n개씩 뽑았다 했을 때
// 가능한 최대 합에 해당하는 dp 값을 출력합니다.
console.log(dp[2 * n][n]);