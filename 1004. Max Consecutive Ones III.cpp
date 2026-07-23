class Solution {
public:
    int longestOnes(vector<int>& nums, int k) {
        int n=nums.size();
        int left=0;
        int countZero=0;
        for(int right=0;right<n;right++){
            if(nums[right]==0){
                countZero++;
            }
            if(countZero>k){
                if(nums[left]==0){
                    countZero--;
                }
                left++;
            }
        }
        return n-left;
    }
};
