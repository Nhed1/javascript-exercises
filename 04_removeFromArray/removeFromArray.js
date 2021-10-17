const removeFromArray = function(array, ...args) {
    let elements = Array.from(args);
    
    for (let i = 0; i < elements.length; i ++){
        let positionElement = array.indexOf(elements[i]);
        let positionFinalElement = array.indexOf(elements[i]) + 1;
        array.splice(positionElement, positionFinalElement)
    }
    return array;
    
};


// Do not edit below this line
module.exports = removeFromArray;
