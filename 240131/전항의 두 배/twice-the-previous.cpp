#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    cout << a << " " << b << " ";

    for(int i=3; i<=10; i++) {
        int tmp = b;
        b = b + 2 * a;
        a = tmp;
        cout << b << " ";
    }

    return 0;
}