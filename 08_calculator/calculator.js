const add = function(...value) {
  return value.reduce( (a, c) => {return a + c}, 0);
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(value) {
	return value.reduce( (a, c) => {return a + c}, 0);
};

const multiply = function(value) {
  return value.reduce( (a, c) => {return a * c}, 1);
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	if (num < 0) {return -1}
  else if (num == 0) {return 1}
  else {
    return (num * factorial(num - 1))
  };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
