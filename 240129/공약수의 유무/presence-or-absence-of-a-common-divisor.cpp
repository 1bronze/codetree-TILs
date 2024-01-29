#include <iostream>
using namespace std;

int main() {
    int a, b; cin >> a >> b;
    bool flag = false;

    for (int i=a; i<=b; i++) {
        if (1920%i==0 && 2880%i==0) flag = true;
    }

    cout << (flag) ? '1' : '0';
    return 0;
}