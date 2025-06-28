const reverseString = require("../07_reverseString/reverseString");

const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedString = str
        .toLowerCase()
        .split('')
        .filter(letter => alphanumerical.includes(letter))
        .join('');
    
    const reverseString = cleanedString.split('').reverse().join('');

    return cleanedString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
