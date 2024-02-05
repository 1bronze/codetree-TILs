#include <iostream>
using namespace std;

int arr[6], ans = 987654321;

int getMin(int sum1, int sum2, int sum3) {
    int maxi, mini;
    maxi = mini = sum1;

    maxi = max(maxi, sum2);
    maxi = max(maxi, sum3);

    mini = min(mini, sum2);
    mini = min(mini, sum3);

    return maxi - mini;
}

bool check(int sum1, int sum2, int sum3) {
    if (sum1 == sum2 || sum2 == sum3 || sum3 == sum1) 
        return false;

    if (ans < getMin(sum1, sum2, sum3)) 
        return false;

    return true;
}

int main() {
    int sum = 0;
    for (int i=1; i<=5; i++) {
        cin >> arr[i];
        sum += arr[i];
    }

    for (int i=1; i<=5; i++) {
        for (int j1=1; j1<=4; j1++) {
            if (j1 == i) continue;

            for (int j2=j1+1; j2<=5; j2++) {
                if (j2 == i) continue;

                int sum1 = arr[i];
                int sum2 = arr[j1] + arr[j2];
                int sum3 = sum - sum1 - sum2;

                if (check(sum1, sum2, sum3)) {
                    ans = getMin(sum1, sum2, sum3);
                }
            }
        }
    }

    cout << ((ans==987654321) ? -1 : ans);
    return 0;
}