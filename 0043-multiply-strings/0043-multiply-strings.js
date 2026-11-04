/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
        if (num1 === "0" || num2 === "0") return "0";

    const m = num1.length, n = num2.length;
    const res = new Array(m + n).fill(0);

    // Pass 1: Accumulate products into positions without carrying yet
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res[i + j + 1] += Number(num1[i]) * Number(num2[j]);
        }
    }

    // Pass 2: Clean up carries from right to left
    for (let k = res.length - 1; k > 0; k--) {
        res[k - 1] += Math.floor(res[k] / 10); // Move carry over to the left
        res[k] %= 10;                         // Keep only the single digit
    }

    // Remove the leading zero if the very first spot is empty
    if (res[0] === 0) res.shift();
    return res.join('');

};