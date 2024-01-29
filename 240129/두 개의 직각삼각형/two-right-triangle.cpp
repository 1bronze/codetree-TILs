#include <iostream>
using namespace std;

int main() {
    int n; cin >> n;

    for(int i=1; i<=n; i++) {
        for(int j=1; j<=n; j++) {
            cout << ((j<=n-i+1) ? '*' : ' ');
        }

        for(int j=n; j>=1; j--) {
            cout << ((j>n-i+1) ? ' ' : '*');
        }

        cout << '\n';
    }

    return 0;
}