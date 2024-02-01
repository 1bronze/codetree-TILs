#include <iostream>
using namespace std;

int DAY[13] = {0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

bool isLeap(int y) {
    bool flag = false;
    if (y%4==0) flag = true;
    if (y%100==0) flag = false;
    if (y%400==0) flag = true;
    return flag;
}

int main() {
    int y, m, d;
    cin >> y >> m >> d;

    if (d < 1 || d > DAY[m]) {
        cout << "-1";
        return 0;
    }

    if (m==2 && d==29) {
        cout << (isLeap(y) ? "Winter" : "-1");
        return 0;
    }

    if (m == 3 || m == 4 || m == 5) cout << "Spring";
    if (m == 6 || m == 7 || m == 8) cout << "Summer";
    if (m == 9 || m == 10 || m == 11) cout << "Fall";
    if (m == 12 || m == 1 || m == 2) cout << "Winter";

    return 0;
}