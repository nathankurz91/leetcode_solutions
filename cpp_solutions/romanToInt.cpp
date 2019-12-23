class Solution
{
public:
    int romanToInt(std::string s)
    {
        int sum = 0;
        // The purpose of the HashMap is so that when we traverse the string, we can easily
        // tell what value is associated with whatever roman "key" we are on.
        // HashMap, char is key int is value
        map<char, int> nums;

        // each key has an associated value
        nums['I'] = 1;
        nums['V'] = 5;
        nums['X'] = 10;
        nums['L'] = 50;
        nums['C'] = 100;
        nums['D'] = 500;
        nums['M'] = 1000;

        // traverse string while adding roman values
        for (int i = 0; i < s.length(); i++)
        {
            // If the value at current position is >= to value at next position, add value at current position to sum
            if (nums[s[i]] >= nums[s[i + 1]])
            {
                sum += nums[s[i]];
            }
            // otherwise add the difference between the value and the next position and the value at the current position.
            else
            {
                sum += nums[s[i + 1]] - nums[s[i]];
                i++; // we need to skip the next position because we have already used to calculate the sum on this iteration
            }
        }

        return sum;
    }
};