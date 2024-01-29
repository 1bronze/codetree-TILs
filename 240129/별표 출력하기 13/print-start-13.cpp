#include <iostream>
using namespace std;

int main() {
    int n; cin >> n;
    
    for(int i=1; i<=2*n; i++) {
        if(i%2==1) { // 홀수행
            for(int j=1; j<=(2*n-i+1)/2; j++) {
                cout << "* ";
            }
        } else { // 짝수행
            for(int j=1; j<=i/2; j++) {
                cout << "* ";
            }
        }
        cout << "\n";
    }
    return 0;
}