#include <iostream>
using namespace std;

int main() {
    int n; cin >> n;

    int cur = 0;
    for(int i=1; i<=n; i++) {
        for(int j=1; j<=n; j++) {
            if(i%2) cur += 1;
            else cur += 2;
            cout << cur << " ";
        }
        cout << "\n";
    }

    return 0;
}