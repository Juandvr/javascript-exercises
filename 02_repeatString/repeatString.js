const repeatString = function(str, num) {
    let string = str
    for(let i = 1; i < num; i++){
        string += str;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
