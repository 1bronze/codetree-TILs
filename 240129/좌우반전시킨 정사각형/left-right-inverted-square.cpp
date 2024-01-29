#include <iostream>
using namespace std;

int arr[10][10];

int main() {
    int n; cin >> n;

    for(int i=1; i<=n; i++) {
        for(int j=1; j<=n; j++) {
            arr[i][j] = i*j;
        }
    }

    for(int i=1; i<=n; i++) {
        for(int j=n; j>=1; j--) {
            cout << arr[i][j] << " ";
        }
        cout << "\n";
    }

    return 0;
}