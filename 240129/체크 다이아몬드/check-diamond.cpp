#include <iostream>
using namespace std;

int main() {
    int n; cin >> n;
    int cnt = 1;
    
    for(int i=1; i<=n; i++) {
        for(int j=1; j<=n; j++) {
            cout << ((j<=n-i) ? " " : "* ");
        }
        cout << '\n';
    }

    for(int i=1; i<=n-1; i++) {
        for(int j=n; j>=1; j--) {
            cout << ((j>n-i) ? " " : "* ");
        }
        cout << '\n';
    }
    return 0;
}