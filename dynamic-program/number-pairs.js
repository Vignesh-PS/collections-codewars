// https://www.codewars.com/kata/563b1f55a5f2079dc100008a/train/javascript

function getLargerNumbers(a, b) {
  if (a?.length != b?.length) {
    return [];
  }

  const result = [];
  a.forEach((anum, i) => {
    result.push(anum > b[i] ? anum : b[i]);
  });

  return result;
}

const output = getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80]);
console.log('output :>> ', output);

// In this kata the aim is to compare each pair of integers from two arrays, and return a new array of large numbers.
// Note: Both arrays have the same dimensions.

// Example:
// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]
