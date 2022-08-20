//https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

function validParentheses(parens) {
    let opened = 0, closed = 0;

    // parens.split('').forEach(element => {
        
    //     if(element == '(') opened++
    //     else if (element == ')') closed++;

    //     console.log(closed);
    //     console.log(opened);
    //     if(closed > opened) return false;

    // });

    for(let i = 0; i<parens.length; i++){
        if(parens[i] == '(') opened++
        if (parens[i] == ')') closed++;
        if(closed > opened) return false;
    }

    //if(closed != opened) return false;
    
    return closed == opened;
}

console.log(validParentheses("()()"));

//   Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100
