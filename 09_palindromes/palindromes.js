const palindromes = function (string) {
    let arrayString = string.toLowerCase().split("")  

    for (let i = 0; i < arrayString.length; i++) {
        let index = arrayString.indexOf(arrayString[i])
        if (arrayString[i] == "!" || arrayString[i] == "." || arrayString[i] == ","){
            arrayString.splice(index, 1)
        } if (arrayString[i] == " ") // remove empty space after removing ", . !"
          arrayString.splice(index, 1)
    }
    string = arrayString.join("") // join the text without "!,."
    
    let reverseArray = arrayString.reverse() // reverse array
    let reverseStr = reverseArray.join("") // array to string
    return (reverseStr == string); 
};

// Do not edit below this line
module.exports = palindromes;
