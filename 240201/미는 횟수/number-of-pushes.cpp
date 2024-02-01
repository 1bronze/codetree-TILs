#include <iostream>
using namespace std;

int main() {
    string target, cmp;
    cin >> target >> cmp;

    int cnt = 0; 
    bool flag = false;
    while(target.length() == cmp.length() && cnt < target.length()) {
        if(target == cmp) {
            flag = true;
            break;
        } else {
            cmp = cmp[cmp.length()-1] + cmp.substr(0, cmp.length()-1);
            cnt++;
        }
    }

    cout << ((flag) ? cnt : '-1'); 
    return 0;
}