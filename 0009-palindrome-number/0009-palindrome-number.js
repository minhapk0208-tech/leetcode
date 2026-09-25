/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str=String(x)
    let reverse=str.split("").reverse().join("")
    return str===reverse
};