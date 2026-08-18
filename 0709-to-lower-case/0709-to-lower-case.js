/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
let result=""
let item=s.split(" ");
result+=item[0].toLowerCase();
return result;
};
console.log(toLowerCase("Hello"))