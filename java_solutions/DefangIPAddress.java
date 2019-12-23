class DefangIPAddress {
    public String defangIPaddr(String address) {
        // string to store the defanged address
        String defAddress = "";
        
        // Traverse the ip address
        for (int i = 0; i < address.length(); i++) {
            if (address.charAt(i) != '.') {
                // if the current character is not a '.', concatenate it to the defanged address
                defAddress = defAddress + address.charAt(i);
            } else {
                // if it is a '.', then concatenate it between open and closing square bracket characters
                defAddress = defAddress + "[" + address.charAt(i) + "]";
            }
        }
        return defAddress;
    }
}