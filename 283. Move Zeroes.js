var moveZeroes = function(nums) {
    let left=0;
    let n=nums.length;
    for(let right=0;right<n;right++){
        if(nums[right]!=0){
            [nums[right],nums[left]]=[nums[left],nums[right]];
            left++;
        }
    }
    return;
};
