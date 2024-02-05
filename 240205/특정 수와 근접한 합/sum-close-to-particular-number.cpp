#include <bits/stdc++.h>
using namespace std;

int n, s, arr[101], ans;

int main() {
    cin >> n >> s;
    for (int i=1; i<=n; i++) 
        cin >> arr[i];

    int cmp = 987654321, sum = 0;
    for (int i=1; i<=n; i++)
        sum += arr[i];

    for (int i=1; i<=n; i++) {
        for (int j=1; j<=n; j++) {
            if (i==j) continue;

            if (abs(s-(sum-arr[i]-arr[j])) < abs(s-cmp)) {
                cmp = sum-arr[i]-arr[j];
                ans = abs(s-cmp);
                // cout << arr[i] << " " << arr[j] << "\n";
            }
        }
    }
    
    cout << ans;
    return 0;
}