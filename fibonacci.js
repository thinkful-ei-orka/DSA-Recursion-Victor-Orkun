// Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 3.1 The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

function fibonacci(num) {
    if (num <= 2) {
        return 1;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
    
};

console.log(fibonacci(7)); //13