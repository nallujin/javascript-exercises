const reverseString = function(str) {
    const strLastEle = str.length-1;
    let newStr = "";
    for (let i = strLastEle; i >= 0; i--) {
        newStr += str.at(i);
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
