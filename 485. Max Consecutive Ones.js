var findMaxConsecutiveOnes = function(nums) {
    let n=nums.length;
    let count=0;
    let maxCount=0;
    for(let i=0;i<n;i++){
        if(nums[i]==1){
            count++;
            maxCount=Math.max(maxCount,count);
        }
        else{
            count=0;
        }
    }
    return maxCount;
};
