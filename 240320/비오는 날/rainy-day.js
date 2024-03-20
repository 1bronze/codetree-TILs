// Forecast 정보를 나타내는 클래스 선언
class Forecast {
    constructor(date, day, weather) {
        this.date = date;
        this.day = day;
        this.weather = weather;
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);

let ans = new Forecast("9999-99-99", "", "");
for (let i = 1; i <= n; i++) {
    const [date, day, weather] = input[i].split(' ');

    // Forecast 객체를 만들어 줍니다.
    const f = new Forecast(date, day, weather);
    if (weather === "Rain") {
        // 비가 오는 경우 가장 최근인지 확인하고,
        // 가장 최근일 경우 정답을 업데이트합니다.
        if (ans.date >= f.date) {
            ans = f;
        }
    }
}

// 결과를 출력합니다.
console.log(ans.date, ans.day, ans.weather);