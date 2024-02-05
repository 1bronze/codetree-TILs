#include <iostream>
using namespace std;

int result[1000001], ans;

int main() {
    int N, M;
    cin >> N >> M;

    int userA[1000001], userB[1000001];
    int v, t, idx;

    userA[0] = 0, userB[0] = 0;

    idx = 1;
    for (int i=1; i<=N; i++) {
        cin >> v >> t;
        for (int j=1; j<=t; j++) {
            userA[idx] = userA[idx-1] + v;
            idx++;
        }
    }
    for(int i=idx; i<=1000000; i++) 
        userA[i] = userA[idx-1];

    idx = 1;
    for (int i=1; i<=M; i++) {
        cin >> v >> t;
        for (int j=1; j<=t; j++) {
            userB[idx] = userB[idx-1] + v;
            idx++;
        }
    }
    for(int i=idx; i<=1000000; i++) 
        userB[i] = userB[idx-1];

    for (int i=1; i<=1000000; i++) {
        if (userA[i]==userB[i]) result[i] = 1;
        else if (userA[i]>userB[i]) result[i] = 2;
        else result[i] = 3;
    }

    int cur = result[0];
    for (int i=1; i<=1000000; i++) {
        if (result[i] != cur) {
            ans++;
            cur = result[i];
        }
    }

    cout << ans;
    return 0;
}