#include <iostream>
using namespace std;

int main()
{
    int n;
    int cnt = 0;
    cin >> n;

    for (int i =1; i<=n;i++)
    {
        if ((i%100==0)&&(i%400!=0))
        {
            cnt += 1;
        }
        else if (i%4 != 0)
        {
            cnt += 1;
        }


    }
    cout << n-cnt;
    return 0;
}