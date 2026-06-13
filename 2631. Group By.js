Array.prototype.groupBy = function(fn) {
    const ans={};
    for(const item of this){
        const key=fn(item);
        if(!ans[key]){
            ans[key]=[];
        }
        ans[key].push(item);
    }
    return ans;
};
