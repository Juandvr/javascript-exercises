const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }

    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 0;
    for (i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num1;
};

// Do not edit below this line
module.exports = fibonacci;
