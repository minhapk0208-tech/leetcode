/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   
    //Loop through the array from right to left
    for (let i = digits.length - 1; i >= 0; i--) {
        //If the digit is less than 9, increment and return
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        
        // if the digit is 9, change it to 0 and carry over
        digits[i] = 0;
    }
    
    // Edge case: If all digits were 9 (e.g., [9,9] -> [0,0]), add 1 to the front
    digits.unshift(1);
    return digits;

};