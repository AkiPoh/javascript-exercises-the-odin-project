const findTheOldest = function(peopleIn) {
    let people = [...peopleIn]
    const time = new Date
    people.map(person => person.age = (person.yearOfDeath === undefined ? time.getFullYear() : person.yearOfDeath) - person.yearOfBirth)
    people.sort((person1, person2) => person2.age - person1.age)
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
