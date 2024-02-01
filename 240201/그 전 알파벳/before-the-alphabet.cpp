#include <iostream>
using namespace std;

int main() {
    char c; cin >> c;
    if (c == 'a') c = 123;
    cout << (char)((int)c - 1);

    return 0;
}