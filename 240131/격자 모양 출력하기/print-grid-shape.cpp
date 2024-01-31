#include <iostream>
using namespace std;

int arr[11][11];

int main() {
    int  n, m;
    cin >> n >> m;

    for (int i=1; i<=m; i++) {
        int y, x; cin >> y >> x;
        arr[y][x] = y * x;
    }

    for (int i=1; i<=n; i++) {
        for (int j=1; j<=n; j++) {
            cout << arr[i][j] << " ";
        }
        cout << "\n";
    }

    return 0;
}