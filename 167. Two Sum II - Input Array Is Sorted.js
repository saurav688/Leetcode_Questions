var twoSum = function(numbers, target) {
    let n=numbers.length;
    let left=0;
    let right=n-1;
    while(left<right){
        let sum=numbers[left]+numbers[right];
        if(sum==target){
            return [left+1,right+1];
        }
        else if(sum>target){
            right--;
        }
        else{
            left++;
        }
    }
    return [-1,-1];
};
