#include <iostream>
using namespace std;

int main() {
    int n, prev, curr; 
    int ans = 987654321;

    cin >> n;

    cin >> prev;
    for (int i=1; i<n; i++) {
        cin >> curr;
        ans = (ans < curr-prev) ? ans : curr-prev;
        prev = curr;
    }

    cout << ans;
    return 0;
}