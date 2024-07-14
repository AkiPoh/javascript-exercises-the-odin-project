const sumAll = function(startNumber, endNumber) {
    if (typeof startNumber !== "number" || typeof endNumber !== "number" || startNumber < 0 || endNumber < 0) {
        return "ERROR";
    } 
    if (startNumber > endNumber) {
        let tempStartNumber = startNumber;
        let tempEndNumber = endNumber;
        startNumber = tempEndNumber;
        endNumber = tempStartNumber;
    }
    let resultNumber = 0;
    for(let i = startNumber; i <= endNumber; i++) {
        resultNumber += i;
    }
    return resultNumber;
};

// Do not edit below this line
module.exports = sumAll;
