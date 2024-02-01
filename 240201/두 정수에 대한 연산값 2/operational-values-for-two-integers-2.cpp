#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    if(a<b) {
        a += 10;
        b *= 2;
    } else {
        a *= 2;
        b += 10;
    }

    cout << a << " " << b;
    return 0;
}