#include <bits/stdc++.h>
using namespace std;

int main() {
    string str[4];
    cin >> str[1] >> str[2] >> str[3];
    
    int minVal = 987654321, maxVal = -987654321;

    for (int i=1; i<=3; i++) minVal = min(minVal, (int)str[i].length());
    for (int i=1; i<=3; i++) maxVal = max(maxVal, (int)str[i].length());

    cout << maxVal - minVal;
    return 0;
}