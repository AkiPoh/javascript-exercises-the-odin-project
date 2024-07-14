const reverseString = function(string) {
    let stringAsArray = string.split("");
    let reversedStringAsArray = [];
    for (let i = 1; i <= stringAsArray.length; i++) {
        reversedStringAsArray.push(stringAsArray.at(-i));
    }
    return reversedStringAsArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
