const leapYears = function(year) {
    const isYearDivisibleByFour = year%4 === 0;
    const isYearCentury = year % 100 === 0;
    const isCenturyDivisiblyByFour = year % 400 === 0;

    return isYearDivisibleByFour && 
        (!isYearCentury || isCenturyDivisiblyByFour);
    
};
// > Leap years are years divisible by four (like 1984 and 2004). However, years 
// divisible by 100 are not leap years (such as 1800 and 1900) unless they are 
// divisible by 400 

// Do not edit below this line
module.exports = leapYears;
