let count = 0;
const bestSum = (targetSum, numbers, memo={})=>{

    // count++;

    // console.log(count);

    if(targetSum in memo==true) return memo[targetSum];

    if(targetSum==0) return [];
    
    if(targetSum<0) return null;

    let bestCombination = null;
        
        for(let num of numbers){
            let remainder = targetSum - num;
            const remainderResult = bestSum(remainder, numbers, memo);
            if(remainderResult!==null){
                const combination = [...remainderResult, num];
                //memo[targetSum] = combination;
                if(bestCombination==null || combination.length<bestCombination.length){
                    bestCombination = combination;
                }
            }
        }
        
        memo[targetSum] = bestCombination;

    return bestCombination;
}



console.log(bestSum(7, [2, 3]));
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(8, [2, 3, 5]));
// return;
console.log(bestSum(999, [1,2,5,25]));

