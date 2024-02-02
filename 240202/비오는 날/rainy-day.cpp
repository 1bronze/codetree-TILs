#include <bits/stdc++.h>
using namespace std;

class Day {
    public:
        string date;
        string week;
        string weather;

        Day(string date, string week, string weather) {
            this->date = date;
            this->week = week;
            this->weather = weather;
        }
};

bool cmp(Day d1, Day d2) {
    if (d1.weather == "Rain" && d2.weather == "Rain") {
        return d1.date < d2.date;
    }
    else if (d1.weather == "Rain" && d2.weather != "Rain") return true;
    else if (d1.weather != "Rain" && d2.weather == "Rain") return false;
    else return d1.date < d2.date;
}

int main() {
    int n; cin >> n;

    string date, week, weather;
    vector<Day> arr;
    for (int i=0; i<n; i++) {
        cin >> date >> week >> weather;
        arr.push_back(Day(date, week, weather));
    }

    sort(arr.begin(), arr.end(), cmp);
    cout << arr[0].date << " " << arr[0].week << " " << arr[0].weather;
    return 0;
}