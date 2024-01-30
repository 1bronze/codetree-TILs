#include <iostream>
using namespace std;

// 65~90

int main() {
    char cur = 65;
    int n; cin >> n;

    for(int i=0; i<n; i++) {
        for(int j=0; j<n; j++) {
            if(i>j) cout << "  ";
            else cout << cur++ << " ";
            if(cur>90) cur = 65;
        }
        cout << "\n";
    }

    return 0;
}