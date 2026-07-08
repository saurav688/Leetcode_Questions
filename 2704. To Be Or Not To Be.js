var expect = function(val) {
    return{
        toBe:function(val2){
            if(val===val2)
            return true;
            else
            throw Error("Not Equal");
        },
        notToBe:function(val2){
            if(val!==val2)
            return true;
            else
            throw Error("Equal");
        }
    }
};
