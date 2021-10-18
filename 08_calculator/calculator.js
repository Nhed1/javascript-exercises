const add = function(x,y) {
	return x + y
};

const subtract = function(x,y) {
	return x - y
};

const sum = function(array) {
  let sum;
	for (let i = 0; i < array.length; i++) {
    let value = array[i]
    sum += value
  }

  return sum
};

const multiply = function(array) {
  let mult;
  for (let i = 0; i < array.length; i++) {
    let value = array[i]
    mult *= value
}
}

const power = function(x, y) {
	return x ** y
};

const factorial = function(x) {
  for (let i = 0; i <= x; i ++) {
    x = i*(i-1) 
  }

  return x
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
