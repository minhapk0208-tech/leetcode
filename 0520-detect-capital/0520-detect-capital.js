/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let upper=word.toUpperCase()
    let lower=word.toLowerCase()
    if (word === upper || word === lower){
        return true;
    }
    if (
        word[0] === word[0].toUpperCase() &&
        word.slice(1) === word.slice(1).toLowerCase()
    ) {
        return true;
    }
    return false;
};