var longestOnes = function(nums, k) {
        let n=nums.length;
        let countZero=0;
        let left=0;
        for(let right=0;right<n;right++){
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
};
