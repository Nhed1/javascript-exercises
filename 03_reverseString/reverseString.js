
const reverseString = function(str) { 
let arrayStr = str.split('')
let reversedArray = [];
for (let i = 0; i < arrayStr.length; i++){
    let letter = arrayStr[(arrayStr.length -1) - i]
    reversedArray.push(letter);
    }
    return reversedArray.join('')

};

// Do not edit below this line
module.exports = reverseString;
