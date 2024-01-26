#include <iostream>
using namespace std;

int main() {
    int age[3];
    char sex[3];
    cin >> age[1] >> sex[1] >> age[2] >> sex[2];
    if ((age[1]>=19 && sex[1]=='M') || (age[2]>=19 && sex[2]=='M')) cout << '1';
    else cout << '0';
    return 0;
}