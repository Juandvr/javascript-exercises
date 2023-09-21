const reverseString = function(str) {
    let arr = str.split('');
    let reverseArr = arr.reverse();
    let reverseStr = reverseArr.join('');

    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
