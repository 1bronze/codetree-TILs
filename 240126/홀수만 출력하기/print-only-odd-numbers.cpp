#include <bits/stdc++.h>
using namespace std;

int main() {
    int n; cin >> n;
    while(n--) {
        int tmp; cin >> tmp;
        if (tmp%3==0 && tmp%2==1) cout << tmp << "\n";
    }

    return 0;
}