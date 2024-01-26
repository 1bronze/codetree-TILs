#include <iostream>
using namespace std;

int main() {
    int sum=1;
    int a,b; cin >> a >> b;
    for(int i=1; i<=b; i++)
        if(i%a==0) sum*=i;
    return 0;
}