class JewelsAndStones {
    public int numJewelsInStones(String J, String S) {
        // keep a count of the number jewels in string S
        int count = 0;

        // traverse the S string
        for (int i = 0; i < S.length(); i++) {
            // use String.contains() to check if the current character exists in J (is the current character a jewel?)
            // if it is, increment your count by 1
            if (J.contains(S.charAt(i)+"")) {
                count++;
            }
        }
        return count;
    }
}