const leapYears = function(year) {
    // leap years are divisible by four, but years divisible 
    // by 100 are not leap years unless they are divisible by 400
   
    if (year % 100 == 0){
        if (year % 400 == 0){
            return true
        } else {
            return false
        }
    } else if (year % 4 == 0){
        return true;
    } else {
        return false;
    }

    
};

// Do not edit below this line
module.exports = leapYears;
