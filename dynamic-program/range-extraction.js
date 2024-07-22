// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

function solution(list) {
  let str = '';
  
  for (let i = 0; i < list.length; i++) {
    let currRange = constructRange(list.slice(i), i);
    if(currRange){
      str += `,${currRange.constructSeries}`;
      i = currRange.endsInd;
    }
    console.log('str :>> ', str);
  }

  return str.substring(1);
}

function constructRange(nums, currInd) {
  let constructSeries = '';
  let endsInd = currInd;
  const initialNum = nums[0];

  constructSeries = initialNum;
  nums.every((num, ind) => {
    if (nums[ind + 1] !== null) {
      if (initialNum == nums[ind + 1] - ind - 1) {
        if(ind == 0){
          constructSeries = `${initialNum},${nums[ind + 1]}`;
        }else{
          constructSeries = `${initialNum}-${nums[ind + 1]}`;
        }
        endsInd = currInd + ind + 1;
        return true;
      }else{
        return false;
      }
    }
    return false;
  });

  return { constructSeries, endsInd };
}

const output = solution([
  -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
  19, 20,
]);

const out1 = constructRange([
  -10, -9, -8, -7, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17,
  18, 19, 20,
]);

console.log('out1 :>> ', output);

// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
