#include <iostream>
using namespace std;

int cnt = 0;

int main() {
    string s1, s2;
    cin >> s1 >> s2;

    for(int i=0; i<s1.length()-1; i++) {
        if(s1.substr(i, 2) == s2) {
            cnt++;
        }
    }

    cout << cnt;

    return 0;
}