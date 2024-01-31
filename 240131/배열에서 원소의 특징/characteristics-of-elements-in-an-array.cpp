#include <iostream>
using namespace std;

int main() {
    int arr[11];

    for (int i=1; i<= 10; i++) {
        cin >> arr[i];
    }

    for (int i=1; i<= 10; i++) {
        if (arr[i]%3==0) {
            cout << arr[i-1];
            return 0;
        }
    }

    return 0;
}