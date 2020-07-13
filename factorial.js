//Write a recursive function that finds the factorial of a given number. 
//The factorial of a number can be found by multiplying that number by each number between itself and 1. 
//For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(num) {
     if(num === 1) {
          return 1;
     }
     return num * factorial(num - 1)
}

console.log(factorial(5))
console.log(factorial(6))
console.log(factorial(10))
