class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        if (s.length === 0) return true;
        let i = 0;
        let j = 0; 

        while (i < s.length && j < t.length){
            if (s[i] == t[j]){
                i += 1;
            } 
            j += 1;
            if(i == s.length){
                return true
            }
        }
        return false;
    }
}
