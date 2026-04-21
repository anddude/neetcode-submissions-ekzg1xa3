class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // keywords: open and close bracket, corresponding, 
        // cannot open one without closing the other.
        // I/O: string / bool
        // succ: 
        while (s.includes('()') || s.includes('{}') || s.includes('[]')) {
            s = s.replace('()', '');
            s = s.replace('{}', '');
            s = s.replace('[]', '');
        }
        return s === '';
    }
}
 
