const add = function(x,y) {
	return x + y
};

const subtract = function(x,y) {
	return x - y
};

const sum = function(array) {
  let sum=0;
	for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
};

console.log(sum([1,2,3,4]))

const multiply = function(array) {
  let mult = 1;
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
    mult *=  array[i]
  }
  return mult
}

const power = function(x, y) {
	return x ** y
};

const factorial = function(x) {
  let fac = 1;
  for (let i = 1; i <= x; i++){
    let value = i
    fac *= value
  }
  return fac
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
