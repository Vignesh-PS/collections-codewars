//https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript


function regexTest(str){
    let re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/;

    return re.test(str);
}


console.log(regexTest('asdfAddd'));

// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.