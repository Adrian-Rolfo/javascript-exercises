const findTheOldest = function(people) {
    const currDate = new Date();
    const currYear = currDate.getFullYear();

    const ages = people.map(person => {
        if(person.hasOwnProperty('yearOfDeath')) {
            return person.yearOfDeath - person.yearOfBirth;
        }
        else {
            return currYear - person.yearOfBirth;
        }
    });

    const agesSorted = ages.toSorted((a,b) => b - a);
    const oldest = agesSorted[0];

    console.log('agiuhegiueahieaughea  ' + people[ages.indexOf(oldest)].name);
    return people[ages.indexOf(oldest)];
};

// Do not edit below this line
module.exports = findTheOldest;
