const { pascalCase } = require("case-anything");

const fibonacci = function(numArg) {
    let num;
    if(typeof(numArg) === 'number') {
        num = numArg;
    }
    else {
        num = parseInt(numArg);
    }
    
    if(num  < 0) return 'OOPS';
    if(num === 0) return 0;
    if(num === 1) return 1;

    /*
    f(x) | 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 45, 
      x  | 0  1  2  3  4  5  6   7   8   9  10

    3

    = func(3)
    = f(2) + f(1)
    = f(1) + f(0) + 1
    = 1 + 1 + 1
    = 3

    = func(3)
    = f(4) + f(3)
    = f(3) + f(2) + f(2) + f(1)
    = f(2) + f(1) + 2f(1) + 2f(0) + 1
    = f(1) + f(0) + 1 + 2 + 2 + 1
    = 1 + 1 + 6
    = 8
    = 
    = 
    */

    return fibonacci(num -2) + fibonacci(num - 1);
};

// Do not edit below this line
module.exports = fibonacci;
