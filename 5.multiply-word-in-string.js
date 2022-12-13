//https://www.codewars.com/kata/5ace2d9f307eb29430000092/train/javascript

function modifyMultiply(str, loc, num) {
  //Code here\
  let neededWord = str.split(' ')[loc];

  neededWord = Array(num).fill(neededWord).join('-');

  return neededWord;

}

console.log(modifyMultiply("This is a string",3 ,5));


// 7 kyu
// You are to write an function that takes a string as it's first paramter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger. You are additionally required to add a hyphen in between each word.

// Example

// modifyMultiply ("This is a string",3,5)
// Should return

// "string-string-string-string-string"

// Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be repeated 5 times.

// Simple. Good luck.
