function toBinary(num) {
     if (num === 0) {
          return '0'
     }
     if (num === 1) {
          return '1'
     }
     if (num < 0) {
          throw new Error('No negative numbers')
     }

     const bits = num % 2;

     const otherBits = Math.floor(num / 2);
     return toBinary(otherBits) + String(bits)
}

console.log(toBinary(0))
console.log(toBinary(1))
console.log(toBinary(2))
console.log(toBinary(10))
console.log(toBinary(18))
console.log(toBinary(255))