/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result=[]
    sum=0
    for(i=0;i<nums.length;i++){
        sum=sum+nums[i]
        result.push(sum)
    }
    return result;
};