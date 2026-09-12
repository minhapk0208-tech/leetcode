/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let arr = s.split("");

    for (let char of t) {

        if (arr.includes(char)) {
            let index = arr.indexOf(char);
            arr.splice(index, 1);
        } else {
            return char;
        }
    }
};