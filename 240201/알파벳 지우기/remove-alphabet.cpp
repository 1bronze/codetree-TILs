#include <iostream>
using namespace std;

int main() {
    string s1, s2, news1, news2;
    cin >> s1 >> s2;

    for (int i=0; i<s1.length(); i++)
        if(s1[i] >= '0' && s1[i] <= '9') 
            news1 += s1[i];

    for (int i=0; i<s2.length(); i++)
        if(s2[i] >= '0' && s2[i] <= '9') 
            news2 += s2[i];

    cout << stoi(news1) + stoi(news2);

    return 0;
}