// 2. Power Calculator
// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

function powerCalculator(num, exponent) {
    //base case
    if (exponent === 0) {
        return 1;
    }
    else if (exponent < 0) {
        return `exponent should be >= 0`
    }
    return num * powerCalculator(num, exponent -1)
   
}

// console.log(powerCalculator(5, 2))
