const repeatString = function(string, num) {
    if (num === 0) {
        return "";
    } else if (num > 0){
        let newString = string;
        for (let i = 1; i < num; i++) {
            newString += string;
        }
        return newString;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
