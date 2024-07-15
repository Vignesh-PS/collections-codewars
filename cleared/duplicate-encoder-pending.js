// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript

function duplicateEncode(word){
    if(word==''){
        return '';
    }

    // replace all special chars


    const wordArray = word.split('');
    const resultArray = [];
    wordArray.forEach(char => {
        if(/[^\w\s]/g.test(char)){
            char = '\\'+char;
        }
        resultArray.push(word.match(new RegExp(char, 'gi') || []).length);
    });

    return resultArray.map(x => x == 1 ? '(' : ')').join('');

}

const output = duplicateEncode('(( @');
console.log('output :>> ', output);


// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 