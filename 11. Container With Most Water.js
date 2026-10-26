var maxArea = function(height) {
    let n=height.length;
        let left=0;
        let right=n-1;
        let maxArea=0;
        while(left<right){
            let h=Math.min(height[left],height[right]);
            let w=right-left;
            let area=h*w;
            maxArea=Math.max(maxArea,area);
            if(height[left]<height[right]){
                left++;
            }
            else{
                right--;
            }
        }
        return maxArea;
};
