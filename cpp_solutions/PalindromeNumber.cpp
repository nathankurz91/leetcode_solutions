// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
class Solution {
public:
    bool isPalindrome(int x) {
        
        // return false if negative
        if (x < 0)
        {
            return false;
        }
        
        int copy = x;
        int reverse = 0;
        
        // check if x is greater than 9 to determine if it has another digit that needs to be checked
        while (x > 9)
        {
            // this will effectively strip the each number off of x and place it at the end of reverse
            reverse = reverse * 10 + x % 10;
            x /= 10;
        }
        
        // a check to ensure the reverse is not out of bounds
        if (reverse >= INT_MAX / 10)
        {
            return false;
        }
        
        // perform the stripping one last time for the final digit
        reverse = reverse * 10 + x % 10;
        
        // copy should equal reverse
        return (copy == reverse);
        
    }
};