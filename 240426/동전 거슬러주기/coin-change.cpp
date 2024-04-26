#include <bits/stdc++.h>
using namespace std;

int n, m;
int coin[100], dp[10001];

int main() {
    cin >> n >> m;

    for (int i = 0; i < n; i++)
        cin >> coin[i];

    for (int i = 0; i <= m; i++)
        dp[i] = 100000;

    for (int i = 0; i < n; i++)
        dp[coin[i]] = 1;

    for (int i = 1; i <= m; i++)
        for (int j = 0; j < n; j++)
            if (i - coin[j] >= 0)
                dp[i] = min(dp[i], dp[i - coin[j]] + 1);

    cout << dp[m];
    return 0;
}