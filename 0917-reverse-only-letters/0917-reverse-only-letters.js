/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
 let arr=s.split("")
 let letters=arr.filter(char=>/[a-zA-Z]/.test(char))
 letters.reverse()
 let j=0
 for(let i=0;i<arr.length;i++){
    if(/[a-zA-Z]/.test(arr[i])){
    arr[i]=letters[j]
    j++
 }
 }
 return arr.join("")
};