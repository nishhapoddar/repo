#include<iostream>
#include<cstdlib>
using namespace std;
class Solution{
public:
    int countDigits(int n){
        if(n==0) return 1;
        int num = abs(n);
        int count= 0;
        while(num>0){
            num = num/10;
            count++;
        }
        return count;
    }
};
int main(){
    int n;
    cin>>n;
    Solution sol;
    cout<<sol.countDigits(n)<<endl;
    return 0;
}
