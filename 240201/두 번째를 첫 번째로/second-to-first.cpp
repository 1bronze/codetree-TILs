#include <bits/stdc++.h>
using namespace std;

int main() {
    string s; cin >> s;
    
    char cmp = s[1];
    for (int i=0; i<s.length(); i++) {
        if (s[i] == cmp) s[i] = s[0];
    }

    cout << s;
    return 0;
}