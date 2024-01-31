#include <bits/stdc++.h>
using namespace std;

double avg = 0;
int cnt = 0;

int main() {
    int n;
    char c;
    string str[21];

    cin >> n;
    for (int i=1; i<=n; i++)
        cin >> str[i];

    cin >> c;

    for (string s : str) {
        if (s[0] != c) continue;
        avg += s.length();
        cnt++;
    }

    avg /= cnt;

    cout << fixed;
    cout.precision(2);
    cout << cnt << " " << avg;

    return 0;
}