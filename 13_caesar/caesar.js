const caesar = function(word,shift) {
  let ap = 'abcdefghijklmnopqrstuvwxyz',
  alphabet = ap.split(""),
  wordArray = word.split("")

  for (let i = 0; i < wordArray.length; i++){    
    let char = word[i],
    isALetter = alphabet.includes(char),
    accumulator = ''

    if (!isALetter) {
      accumulator += char;
    } else {
      let charIndex = alphabet.indexOf(char)

      accumulator += alphabet[charIndex + shift] ||
       alphabet[charIndex - shift]
    }
  }
  return accumulator

};

console.log(caesar('Mjqqt, Btwqi!', -5))

// Do not edit below this line
module.exports = caesar;
