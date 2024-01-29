#include <iostream>
using namespace std;

int main() {
    int n; cin >> n;
    int cnt = 1;
    bool inc = true;

    for(int i=1; i<2*n; i++) {
        for(int j=1; j<=cnt; j++) cout << '*';
        (inc) ? cnt++ : cnt--;

        if(cnt==n) inc = false;
        cout << "\n\n";
    }
    return 0;
}