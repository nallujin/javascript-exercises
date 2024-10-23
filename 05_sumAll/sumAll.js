const sumAll = function(startNum, finalNum) {
    const isValid = (Number.isInteger(startNum) && startNum > 0)
        && (Number.isInteger(finalNum) && finalNum > 0);
    let finalOutput = 0;
    if (isValid) {
        if (startNum > finalNum) {
            [startNum, finalNum] = [finalNum, startNum];
        }
        for (let i = startNum; i <= finalNum; i++) {
            finalOutput += i;
        }
    } else {
        return "ERROR";
    }
    return finalOutput;
};

// Do not edit below this line
module.exports = sumAll;
