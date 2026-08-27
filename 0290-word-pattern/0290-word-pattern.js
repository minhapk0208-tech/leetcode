/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
     let words = s.split(" ");

    if (pattern.length !== words.length) {
        return false;
    }

    for (let i = 0; i < pattern.length; i++) {

        if (pattern.indexOf(pattern[i]) !== words.indexOf(words[i])) {
            return false;
        }
    }

    return true;
};