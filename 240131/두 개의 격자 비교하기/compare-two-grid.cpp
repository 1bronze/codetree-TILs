#include <iostream>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    int arr1[11][11], arr2[11][11], ans[11][11];

    for (int i=1; i<=n; i++) {
        for (int j=1; j<=m; j++) {
            cin >> arr1[i][j];
        }
    }
    for (int i=1; i<=n; i++) {
        for (int j=1; j<=m; j++) {
            cin >> arr2[i][j];
        }
    }

    for (int i=1; i<=n; i++) {
        for (int j=1; j<=m; j++) {
            ans[i][j] = (arr1[i][j] == arr2[i][j]) ? 0 : 1;
            cout << ans[i][j] << " ";
        }
        cout << "\n";
    }

    return 0;
}