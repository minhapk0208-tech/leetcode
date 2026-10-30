/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const countMap={}
    for(let num of nums){
        if(countMap[num]){
            countMap[num]+=1;
        }else{
            countMap[num]=1
        }
    }
    let totalSum=0;
    for(let num in countMap){
        if(countMap[num]===1){
            totalSum+=Number(num)
        }
    }
    return totalSum
};