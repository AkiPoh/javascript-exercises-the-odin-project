const palindromes = function (string) {
    let newString = string.toLowerCase().replace(/[^0-9a-z]/gi, '')
    return newString === [...newString].reduce((total, current) => current + total, "");
};

// Do not edit below this line
module.exports = palindromes;