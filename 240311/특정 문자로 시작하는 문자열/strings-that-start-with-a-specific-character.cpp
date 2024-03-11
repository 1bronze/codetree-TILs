#include <iostream>
using namespace std;

int main() {
    
    int n;
    cin >> n;

    string str[n];
    for(int i=0; i<n; i++){
        cin >> str[i];
    }

    char s;
    cin >> s;

    int cnt=0;
    int sum = 0;
    for(int i=0; i<n; i++){
        if(str[i][0]==s){
            cnt++;
            int len = str[i].length();
            sum += len;
        }
    }

    float avg = sum/cnt;
    
    cout << fixed;
    cout.precision(2);
    cout << cnt << " " << avg;

    return 0;
}