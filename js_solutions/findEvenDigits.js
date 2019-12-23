/**
 * Dev: Nathan Kurz
 * 
 * Find the how many numbers in the array have an even number of digits. Return that amount.
 * So this solution "works" when i just run the code, but it fails when i try to submit it, ill have to figure out why. I feel like it should work all the time.
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let evenCount = 0;

    // loop through the array and look at each number individually
    // count the number of digits
    for (let i = 0; i < nums.length; i++) {
        if (getNumberOfDigits(nums[i]) % 2 == 0) {
            evenCount++;
        }
    }

    return evenCount;
};

// function to count the number of digits
var getNumberOfDigits = function(num) {
    let count = 1; // start on one because there is always at least one digit in a number
    // keep dividing by ten until 0 to count the digits
    while ((num /= 10) != 0) {
        count++;
    }

    return count;
}

// her is an alternate one liner I found by ehdwn1212 on LeetCode solutions...
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findNumbers = function(nums) {
//     return nums.reduce((acc, num) => num.toString().length % 2 ? acc : acc + 1, 0)
// };