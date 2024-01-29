#include <iostream>
using namespace std;

int main() {
    int n; cin >> n;
    int cnt = 1;

    while(n--) {
        for(int i=1; i<=cnt; i++) cout << '*';
        cnt += 2;
        cout << '\n';
    }
    
    return 0;
}