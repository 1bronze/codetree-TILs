#include <iostream>
using namespace std;

int main() {
    string target, cmp;
    cin >> target >> cmp;

    int cnt = 1;
    bool flag = false;
    while(target.length() == cmp.length() && cnt <= target.length()) {
        cmp = cmp[cmp.length()-1] + cmp.substr(0, cmp.length()-1);

        if(target == cmp) {
            flag = true;
            break;
        }

        cnt++;
    }

    cout << ((flag) ? cnt : '-1'); 
    return 0;
}