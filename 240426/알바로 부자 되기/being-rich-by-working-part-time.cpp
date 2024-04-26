#include <bits/stdc++.h>
using namespace std;

int n;
int s[1001], e[1001], p[1001], dp[1001];

int main() {
    cin >> n;

    for (int i = 1; i <= n; i++)
        cin >> s[i] >> e[i] >> p[i];

    dp[0] = 0;
    for (int i = 1; i <= n; i++)
        dp[i] = p[i];

    for (int i = 2; i <= n; i++) {
        for (int j = 1; j < i; j++) {
            if (s[i] > e[j])
                dp[i] = max(dp[i], dp[j] + p[i]);
        }
    }

    int ans = 0;
    for (int i = 1; i <= n; i++)
        ans = max(ans, dp[i]);

    cout << ans;
    return 0;
}