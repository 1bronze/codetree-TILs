#include <iostream>
using namespace std;

int main() {
    int n, arr[101]; 

    cin >> n;
    for (int i=1; i<=n; i++)
        cin >> arr[i];
    
    int cnt = 0;
    for (int i=1; i<=n; i++) {
        if(arr[i] == 2) cnt++;
        if(cnt == 3) {
            cout << i;
            return 0;   
        }
    }

    return 0;
}