#include <bits/stdc++.h>
using namespace std;

int n, m, arr[101][101], ans;

void input() {
    cin >> n >> m;
    for (int i=1; i<=n; i++) {
        for (int j=1; j<=n; j++) {
            cin >> arr[i][j];
        }
    }
}

int checkRow(int y) {
    int cnt = 0;

    int tmp = 1;
    for (int i=2; i<=n; i++) {
        if (arr[y][i] == arr[y][i-1]) tmp++;
        else {
            cnt = max(cnt, tmp);
            tmp = 1;
        }
    }
    cnt = max(cnt, tmp);

    if (cnt >= m) return 1;
    else return 0;
}

int checkColumn(int x) {
    int cnt = 0;

    int tmp = 1;
    for (int i=2; i<=n; i++) {
        if (arr[i][x] == arr[i-1][x]) tmp++;
        else {
            cnt = max(cnt, tmp);
            tmp = 1;
        }
    }
    cnt = max(cnt, tmp);

    if (cnt >= m) return 1;
    else return 0;
}

void solve() {
    for (int i=1; i<= n; i++) {
        ans += checkRow(i);
        ans += checkColumn(i);
    }
    cout << ans;
}

int main() {
    input();
    solve();
    return 0;
}