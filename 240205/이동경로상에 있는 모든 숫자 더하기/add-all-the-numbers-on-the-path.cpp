#include <bits/stdc++.h>
using namespace std;

// 12 3 6 9
int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};

int n, t, arr[100][100], ans;
string s;

int main() {
    cin >> n >> t;
    cin >> s;

    for (int i=1; i<=n; i++)
        for (int j=1; j<=n; j++)
            cin >> arr[i][j];

    int x, y, dir;
    x = y = (n+1)/2;
    dir = 0;

    ans += arr[y][x];
    for (int i=0; i<t; i++) {
        if (s[i] == 'L') dir = (dir-1+4)%4;
        else if (s[i] == 'R') dir = (dir+1)%4;
        else {
            if (dir==0 && y==0) continue;
            if (dir==1 && x==n) continue;
            if (dir==2 && y==n) continue;
            if (dir==3 && x==0) continue;

            y = y + dy[dir];
            x = x + dx[dir];
            ans += arr[y][x];
        }
    }

    cout << ans;
    return 0;
}