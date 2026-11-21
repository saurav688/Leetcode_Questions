var sortColors = function(arr) {
        let n=arr.length;
        let low=0;
        let mid=0;
        let high=n-1;
        while(mid<=high){
            if(arr[mid]==0){
               arr[mid]=arr[low];
               arr[low]=0;
               mid++;
               low++;
            }
            else if(arr[mid]==1){
                mid++;
            }
            else{
                arr[mid]=arr[high];
                arr[high]=2;
                high--;
            }
        }
        return;
};
