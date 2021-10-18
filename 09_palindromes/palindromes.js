const palindromes = function (string) {
    let arrayString = string.toLowerCase().split("")  
    for (let i = 0; i < arrayString.length; i++) {
        if (arrayString[i] == "!") {
            let index = arrayString.indexOf(arrayString[i])
            arrayString.splice(index, 1)
        }
    }

    let reverseArray = arrayString.reverse() // reverse array
    let reverseStr = reverseArray.join("") // array to string
    return (reverseStr == string);        

};

// Do not edit below this line
module.exports = palindromes;
