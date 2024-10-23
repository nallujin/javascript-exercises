const removeFromArray = function(arr, ...numbers) {
    const newArr = arr;
    numbers.forEach((num) => {
        let index = newArr.indexOf(num);
            while (index !== -1) {
                newArr.splice(index, 1);
                index = newArr.indexOf(num); // Find the next occurrence of 2
            }
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
