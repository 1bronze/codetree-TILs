#include <iostream>
using namespace std;

int main() {
    int a, arr[4];
    cin >> a;
    for(int i=0; i<4; i++) cin >> arr[i];

    for(int i=0; i<4; i++) {
        if(arr[i] < a) cout << "1\n";
        else cout << "0\n";
    }

    return 0;
}