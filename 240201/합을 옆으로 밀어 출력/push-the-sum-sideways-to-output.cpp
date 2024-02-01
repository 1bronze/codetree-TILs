#include <iostream>
using namespace std;

int main() {
    int n; cin >> n;

    int sum = 0;
    while (n--) {
        int tmp; cin >> tmp;
        sum += tmp;
    }

    string s = to_string(sum);
    s = s.substr(1) + s[0];
    cout << s;
    return 0;
}