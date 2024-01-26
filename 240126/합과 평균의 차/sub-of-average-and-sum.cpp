#include <iostream>
using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    cout << a+b+c << "\n";
    cout << ((double)a+b+c)/3 << "\n";
    cout << a+b+c - ((double)a+b+c)/3 << "\n";
    return 0;
}