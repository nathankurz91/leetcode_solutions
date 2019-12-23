/**
 * 
 * 
Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let numBalStrings = 0;
    let L = 0;
    let R = 0;

    // check each character in the string
    // if 'L', add one to L
    // if 'R', add one to R
    // if L == R then we have another balanced string
    for (let i = 0; i < s.length; i++) {
        L = s[i] == 'L' ? L + 1 : L;
        R = s[i] == 'R' ? R + 1 : R;
        if (L == R) {
            ++numBalStrings;
        }
    }

    return numBalStrings;
    
};