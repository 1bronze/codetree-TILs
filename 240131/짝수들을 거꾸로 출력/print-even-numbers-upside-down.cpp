#include <iostream>
using namespace std;

int main() {
    int n, arr[101]; 

    cin >> n;
    for (int i=1; i<=n; i++) 
        cin >> arr[i];

    for (int i=n; i>=1; i--) 
        if (arr[i]%2 == 0) cout << arr[i] << " ";

    return 0;
}