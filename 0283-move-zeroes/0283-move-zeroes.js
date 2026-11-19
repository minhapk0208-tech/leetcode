/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let result = [];

    for (let num of nums) {
        if (num !== 0) {
            result.push(num);
        }
    }

    for (let i = result.length; i < nums.length; i++) {
        result.push(0);
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i];
    }
};