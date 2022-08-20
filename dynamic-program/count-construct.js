let count = 0;
const countConstruct = function(target, wordBank, memo={}){
    count++;
    if(target in memo) return memo[target];
    if(target=='') return 1;

    let totalCount = 0;

    for(let word of wordBank){
        if(target.indexOf(word)==0){
            const remainWord = target.slice(word.length);
            const numWaysCount = countConstruct(remainWord, wordBank, memo);
            //memo[target] = numWaysCount;
            totalCount+=numWaysCount;
        }
    }

    memo[target] = totalCount;
    return memo[target];
}


console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet', ['e', 'ee', 'eeee', 'eeeeeee', 'eeeeeeee', 'o', 't']));
console.log(count);