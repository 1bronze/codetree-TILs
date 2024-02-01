#include <iostream>
using namespace std;

int main() {
    string s; cin >> s;

    int cnt = 1;
    for (int i=0; i<s.length(); i++) {

        if (s[i] == 'e') {
            // for (int j=i; j<s.length()-cnt; j++) {
            //     s[j] = s[j+1];
            // }

            s.erase(i, 1);
            cout << s;
            return 0;
            // cnt++;
        }

        // if (i==s.length()-cnt) s[i] = '\0';
    }

    // cout << s;
    return 0;
}