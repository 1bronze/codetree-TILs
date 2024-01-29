#include <iostream>
using namespace std;

int main() {
    bool flag = true;

    for (int i=0; i<5; i++) {
        int tmp; cin >> tmp;
        if (tmp%3) flag = false;
    }

    cout << (flag) ? '1' : '0';
    return 0;
}