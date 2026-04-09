class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        for (let i = 0; i < arr.length; i++){
            let greatNum = -1
            if(i == arr.length - 1){
                arr[i] = -1;
                return arr;
            }
            for (let j = i; j < arr.length; j++){
                if(arr[j+1] > greatNum){
                    greatNum = arr[j+1]
                }
                arr[i] = greatNum
            }
        }
    }
}