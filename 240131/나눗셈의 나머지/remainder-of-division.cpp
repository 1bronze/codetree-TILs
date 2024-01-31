#include <iostream>
using namespace std;

int cnt[11];

int main() {
    int a, b;
    cin >> a >> b;

    while (a>1) {
        cnt[a%b]++;
        a = a/b;
    }

    int ans = 0;
    for (int i=0; i<b; i++) 
        ans += cnt[i]*cnt[i];
    cout << ans;

    return 0;
}