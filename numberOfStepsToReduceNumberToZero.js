/**
 Parameters: int
 Returns: int, count of numbers of step to reduce parameter int to 0;
 Ex: Input: num = 14
 Output: 6
 */
var numberOfSteps = function(num) {
    let stepCount = 0;
    let newNum = num;
    
        while(newNum !== 0){
         if (newNum % 2 !== 0){
            newNum-= 1;
            stepCount+= 1;
        } else if (newNum % 2 === 0){
            newNum = newNum / 2;
            stepCount+= 1;
        }
    }
    return stepCount;
};
