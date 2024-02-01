#include <iostream>
using namespace std;

int main() {
    string target, cmp;
    cin >> target >> cmp;

    int cnt = 1;
    bool flag = false;
    while(target.length() == cmp.length() && cnt <= target.length()) {
        target = target[target.length()-1] + target.substr(0, target.length()-1);

        if(target == cmp) {
            flag = true;
            break;
        }

        cnt++;
    }

    cout << ((flag) ? cnt : '-1'); 
    return 0;
}