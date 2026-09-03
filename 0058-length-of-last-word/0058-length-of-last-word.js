/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let output=s.trim().split(" ")
    return output[output.length-1].length
};