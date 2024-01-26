#include <bits/stdc++.h>
using namespace std;

string s;
vector<string> v;

int main() {
    cin >> s;

    int pr = 0;
    for (int i = 0; i < s.length(); i++) {
        if (s[i] == '-') {
            v.push_back(s.substr(pr, i - pr));
            pr = i;
        }
    }
    v.push_back(s.substr(pr, s.length() - pr + 1));

    cout << v[0] << v[2] << v[1];
    return 0;
}