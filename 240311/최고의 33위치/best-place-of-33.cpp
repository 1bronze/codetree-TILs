#include <bits/stdc++.h>
using namespace std;

const int dy[9] = {0, 0, 0, 1, 1, 1, 2, 2, 2};
const int dx[9] = {0, 1, 2, 0, 1, 2, 0, 1, 2};

int n, arr[21][21], ans; 

void input() {
    cin >> n;

    for (int i=1; i<=n; i++) {
        for (int j=1; j<=n; j++) {
            cin >> arr[i][j];
        }
    }
}

void solve() {
    for (int i=1; i<=n-2; i++) {
        for (int j=1; j<=n-2; j++) {
            int cnt = 0;
            for (int k=0; k<9; k++) {
                int y = i + dy[k];
                int x = j + dx[k];
                cnt += arr[y][x];
            }
            ans = max(ans, cnt);
        }
    }
    cout << ans;
}

int main() {
    input();
    solve();
    return 0;
}