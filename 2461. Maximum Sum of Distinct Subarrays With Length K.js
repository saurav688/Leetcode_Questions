var maximumSubarraySum = function(nums, k) {
        let freq=new Map();
        let windowSum=0;
        let ans=0;
        let n=nums.length;
        for(let i=0;i<n;i++){
            windowSum+=nums[i];
            freq.set(nums[i],(freq.get(nums[i]) || 0)+1);
            if(i>=k){
               windowSum-=nums[i-k];
               freq.set(nums[i-k],freq.get(nums[i-k])-1);
               if(freq.get(nums[i-k])===0){
                freq.delete(nums[i-k]);
               }
            }
            if(i>=k-1 && freq.size==k){
                ans=Math.max(ans,windowSum);
            }
        }
        return ans;
};
