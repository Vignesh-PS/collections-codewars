// https://www.codewars.com/kata/577ad961ae2807182f000c29/train/javascript

function countChar(string, char) {
    // your mission, should you choose to accept it. 
    let count = 0;
    string.split('').forEach(str => {
        if(str.toLowerCase()==char.toLowerCase()){
            count++;
        }
    });

    return count;
}

console.log(countChar("fizzbuzz","z"));

// 7 kyu
// Count the Characters

// The goal of this kata is to write a function that takes two inputs: a string and a character. The function will count the number of times that character appears in the string. The count is case insensitive.

// For example:

// countChar("fizzbuzz","z") => 4
// countChar("Fancy fifth fly aloof","f") => 5
// The character can be any alphanumeric character.

// Good luck.