class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = []

        for (let i=0; i < operations.length; i++){
            
            if(operations[i] === 'D'){
                let newNum = stack[stack.length -1] * 2;
                
                stack.push(newNum);
                console.log(stack);
            } else if (operations[i] === 'C'){
                stack.pop();
                console.log(stack);
            } else if(operations[i] === '+'){
                stack.push((stack[stack.length-2] + stack[stack.length-1]));
                console.log(stack);
            }
            else {
                stack.push(Number(operations[i]));
                console.log(stack);
                }
                console.log(stack);
        }
        console.log(stack);
        return stack.reduce((acc, curr) => acc + curr, 0);
    }
}
