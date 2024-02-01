#include <iostream>
using namespace std;

int main() {
    int lCnt = 0, rCnt = 0, cnt = 0;
    string word, dir;
    cin >> word >> dir;

    for (char c : dir) {
        if (c == 'L') lCnt++;
        else rCnt++;
    }

    string ans = word;
    cnt = rCnt - lCnt;
    if (cnt > 0) {
        while(cnt--) {
            ans = ans[word.length()-1] + ans.substr(0, word.length()-1);
        }
    } else {
        cnt *= -1;
        while(cnt--) {
            ans = ans.substr(1) + ans[0];
        }
    }

    cout << ans;
    return 0;
}