#include <iostream>
using namespace std;

int main() {
    int n; cin >> n;

    int cur = 9;
    for(int i=1; i<=n; i++) {
        for(int j=1; j<=n; j++) {
            cout << cur--;
            if(cur==0) cur = 9;
        }
        cout << "\n";
    }
    return 0;
}