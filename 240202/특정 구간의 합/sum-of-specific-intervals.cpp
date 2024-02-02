#include <iostream>
using namespace std;

int main() {
    int n, m, arr[101], a1, a2;
    int ans;

    cin >> n >> m;
    for (int i=1; i<=n; i++) cin >> arr[i];
    for (int i=1; i<=m; i++) {
        ans = 0;

        cin >> a1 >> a2;
        for (int j=a1; j<=a2; j++) ans += arr[j];
        cout << ans << "\n";
    }

    return 0;
}