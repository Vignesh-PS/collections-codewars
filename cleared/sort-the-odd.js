// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
  if (array.length == 0) {
    return [];
  }

  let oddNumArray = [];
  let evenNumsWithIndex = {};
  array.forEach((num, index) => {
    if (num % 2 == 0) {
      evenNumsWithIndex[index] = num;
      return;
    }
    oddNumArray.push(num);
  });

  const oddSortedArray = oddNumArray.sort((a, b) => a - b);
  for (const evenNum in evenNumsWithIndex) {
    oddSortedArray.splice(evenNum, 0, evenNumsWithIndex[evenNum]);
  }

  // Return a sorted array.
  return oddSortedArray;
}

const output = sortArray([5, 8, 6, 3, 4]);
console.log('output :>> ', output);

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
