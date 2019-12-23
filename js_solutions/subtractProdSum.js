/**
 * @param {number} n
 * @return {number}
 */
let subtractProductAndSum = function(n) {
    let sumDigits = 0;
    let prodDigits = 1;
    
    while (n) {
        let currentDigit = n % 10; // collect each digit using mod 10
        sumDigits += currentDigit;
        prodDigits *= currentDigit;
        
        // ~~ is double NOT bitwise operator
        // used as substitute for Math.floor()
        n = ~~(n / 10)
    }
    return prodDigits - sumDigits;
};