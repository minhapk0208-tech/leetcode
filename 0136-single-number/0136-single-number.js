/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const  seen=new Set()
    for(let num of nums){
        if(seen.has(num)){
            seen.delete(num)
        }else{
            seen.add(num)
        }
       
    }
        return seen.values().next().value
};