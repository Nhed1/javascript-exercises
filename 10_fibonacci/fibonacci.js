const fibonacci = function(arrayLength) {
    if (arrayLength < 0) {
        return "OOPS"
    } else {

    
    let array = [1,1],
        num1 = array[0],
        num2 = array[1],
        next,
        cnt = 2;
    
    while (cnt < arrayLength) {
        next = num1 + num2
        num1 = num2
        num2 = next
        array.push(next)
        cnt ++ 
    }
    return array[arrayLength-1]    
}
};
// 0, 1, 1
// 0, 1, 2
// Do not edit below this line
module.exports = fibonacci;
