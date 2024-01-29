#include <iostream>
using namespace std;

int main() {
    double avg = 0;

    int i = 0;
    while(true) {
        int tmp; cin >> tmp;
        if (tmp < 20 || tmp >= 30) break;
        i++;
        avg += tmp;
    }

    cout << fixed;
    cout.precision(2);
    cout << avg/i;
    return 0;
}