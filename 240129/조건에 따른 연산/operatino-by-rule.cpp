#include <iostream>
using namespace std;

int main() {
    int n; cin >> n;

    int i = 0;
    while(++i) {
        if(n%2) n = 2 * n + 2;
        else n = 3 * n + 1;

        if (n >= 1000) {
            cout << i;
            return 0;
        }
    }

    return 0;
}