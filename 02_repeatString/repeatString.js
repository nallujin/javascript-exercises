const repeatString = function(str, num) {
    if (str === "" || num === 0) {
        return "";
    } else if (str !== "" && num >= 1) {
        let theWord = str;
        for (let i = 0; i < num-1; i++) {
            theWord += str;
        }
        return theWord;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
