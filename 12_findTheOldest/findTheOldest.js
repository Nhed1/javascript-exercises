const findTheOldest = function(people) {
    let age,
        oldest,
        maxAge = 0,
        currentYear = new Date().getFullYear()

    for (let i = 0; i < people.length; i++){
        let person = people[i],
            birth = person.yearOfBirth,
            death = person.yearOfDeath

        age = death - birth
        if (isNaN(age)){ // check if is Not a number
            age = currentYear - birth
        }
        if (age > maxAge){
            oldest = person
            maxAge = age
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
