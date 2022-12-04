const add = function(firstValue, secondValue) {
	return firstValue + secondValue;
};

const subtract = function(firstValue, secondValue) {
	return firstValue - secondValue;
};

const sum = function(arr) {
  let sumOfNums = 0;
	for (let i = 0; i < arr.length; i++) {
    sumOfNums += arr[i];
  }
  return sumOfNums;
};

const multiply = function(arr) {
  let multiOfNums = 1;
	for (let i = 0; i < arr.length; i++) {
    multiOfNums *= arr[i];
  }
  return multiOfNums;
};

const power = function(firstValue, secondValue) {
	return firstValue ** secondValue;
};

const factorial = function(value) {
  let factNum = 1;
  if (value === 0) {
    return 1;
  }
  else {
  	for (let i = 1; i <= value; i++) {
      factNum *= i;
    }
    return factNum;
  }
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
