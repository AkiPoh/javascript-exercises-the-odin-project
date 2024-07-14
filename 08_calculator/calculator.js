const add = function(value1, value2) {
	return value1 + value2;
};

const subtract = function(value1, value2) {
	return value1 - value2;
};

const sum = function(arrayNumbers) {
  let result = 0;
  for (let i = 0; i < arrayNumbers.length; i++) {
    result += arrayNumbers[i];
  }
	return result;
};

const multiply = function(valuesArray) {
  let result = valuesArray[0];
  for (let i = 1; i < valuesArray.length; i++) {
    result *= valuesArray[i];
  }
  return result;
};

const power = function(value1, value2) {
	return Math.pow(value1, value2);
};

const factorial = function(value) {
	let result = 1;
  for (let i = 1; i <= value; i++) {
    result *= i;
  }
  return result;
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
