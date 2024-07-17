// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
  let countNums = {};

  for (const num of A) {
    if (countNums[num]) {
      countNums[num]++;
    } else {
      countNums[num] = 1;
    }
  }

  const countNumArr = Object.entries(countNums);
  for(const arrNum of countNumArr){
    console.log('arrNum :>> ', arrNum);
    if(arrNum[1] % 2 == 0){
        continue;
    }
    return arrNum[0];
  }
  
  return 0;
}

const output = findOdd([
  20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5,
]);
console.log('output :>> ', output);

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
