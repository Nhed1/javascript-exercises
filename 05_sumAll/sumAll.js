const sumAll = function(...args) {
    let array = Array.from(args);
    let sum = 0;
    arraySum = [];
    // sum all values between two numbers parameters !

    for (let i = 0; i < array.length; i ++) {
        let elem = array[i]
        if (typeof(elem) == 'number') {
            arraySum.push(elem)
        } else {
            return 'ERROR'
        }
    }
    arraySum.sort()

    for (let i = arraySum[0]; i <= arraySum[1]; i ++){
        sum += i;
    }
    return sum;
}
// Do not edit below this line
module.exports = sumAll;
