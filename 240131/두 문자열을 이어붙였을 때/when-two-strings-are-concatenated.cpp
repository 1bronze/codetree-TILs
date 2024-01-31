#include <iostream>
using namespace std;

int main() {
    string a, b;
    cin >> a >> b;

    if(a+b == b+a) cout << "true";
    else cout << "false";

    return 0;
}