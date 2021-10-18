const removeFromArray = function(array, ...args)  {
    let newArray = Array.from(args)

    for (let i = 0; i < newArray.length; i++) {
        let item = newArray[i];

        if (array.includes(item)){
            array.splice(array.indexOf(item), 1); // remove itens da lista
        }
    }
    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
