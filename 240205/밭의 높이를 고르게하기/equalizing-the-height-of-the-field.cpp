#include <bits/stdc++.h>
using namespace std;

int n, h, t, arr[101];
int ans = 987654321;

int main() {
    cin >> n >> h >> t;
    for (int i=1; i<= n; i++) 
        cin >> arr[i];

    for (int i=1; i<n-t+2; i++) { 
        int cost = 0;
        for (int j=i; j<i+t; j++) { 
            cost += abs(h-arr[j]);
        }

        ans = (cost < ans) ? cost : ans;
    }

    cout << ans;
    return 0;
}