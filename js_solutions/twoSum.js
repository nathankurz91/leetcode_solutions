/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * solution for twoSum problem
 * 
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */
var twoSum = function(nums, target) {
    // Array to store indices
    var result = [];

    // nested loop to attempt to add all elements with all other elements
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            // check if the sum of the two elements is equal to the target
            // if it is, push the two indices to the return arrary
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
};