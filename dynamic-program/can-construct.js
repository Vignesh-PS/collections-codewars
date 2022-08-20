let count = 0;
const canConstruct = function(target, wordBank, memo={}){
    if(target in memo) return memo['target'];
    count++;
    console.log('count :>> ', count);
    if(target=='') return true;

    for(let word of wordBank){
        if(target.indexOf(word)==0){
            const remainWord = target.slice(word.length);
            if(canConstruct(remainWord, wordBank, memo)==true){
                memo[word] = true;
                return true;
            }
        }
    }

    memo[target] = false;
    return false;
}


console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet', ['e', 'ee', 'eeee', 'eeeeeee', 'eeeeeeee', 'o', 't']));