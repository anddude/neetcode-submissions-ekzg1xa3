class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //remove all spaces and non-alpha numeric characters
        const regex = /[^a-z0-9]/gi
        const sanitized = s.toLowerCase().replace(regex , "");
        if(sanitized.length <= 1) return true;
        if(sanitized[0] !== sanitized[sanitized.length -1]) return false;
        return this.isPalindrome(sanitized.slice(1, sanitized.length -1));
    }
}
