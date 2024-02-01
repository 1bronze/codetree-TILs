#include <bits/stdc++.h>
using namespace std;

int getGCD(int n, int m) {
    int gcd = min(n, m);
    while(true) {
        if (n%gcd == 0 && m%gcd==0) 
            return gcd;
        gcd--;
    }
}

int main() {
    int n, m; 
    cin >> n >> m;

    int gcd = getGCD(n, m);
    cout << n * m / gcd;

    return 0;
}