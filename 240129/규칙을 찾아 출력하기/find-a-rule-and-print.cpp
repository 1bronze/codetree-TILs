#include <iostream>
using namespace std;

int main() {
    int n; cin >> n;

    for(int i=1; i<=n; i++) cout << "* ";
    cout << "\n";

    for(int i=1; i<=n-1; i++) {
        for(int j=1; j<=n-1; j++) {
            cout << ((j<=i) ? "* " : "  ");
        }
        cout << "*\n";
    }
    return 0;
}