const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return (arr.length != 0) ? arr.reduce((ttl, num) => ttl + num): 0;
};

const multiply = function(...args) {
  let ttl = 1;
  args.forEach((arg) => ttl *= arg);
  return ttl;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  let ttl = 1;
	if (a === 0)
  {
    return 1;
  } 
  else {
    for (let i = 1; i < a + 1; i++){
      ttl *= i
    }
    return ttl;
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
