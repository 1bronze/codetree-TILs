#include <iostream>
using namespace std;

int main() {
    int arr[5][5];
    
    for (int i=1; i<=4; i++) {
        for (int j=1; j<=4; j++) {
            cin >> arr[i][j];
        }
    }

    int ans = 0;
    for (int i=1; i<=4; i++) {
        for (int j=1; j<=i; j++) {
            ans += arr[i][j];
        }
    }

    cout << ans;
    return 0;
}