//https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers) {
  let oddArray = integers.filter((x) => Math.abs(x % 2) == 1);
  let evenArray = integers.filter((x) => Math.abs(x % 2) == 0);
  return oddArray.length == 1 ? oddArray[0] : evenArray[0];
  
}

console.log(
  findOutlier([
    83011928,
    40148802,
    154705574,
    17596232,
    22997912,
    21551494,
    139173274,
    -111820662,
    -64275792,
    94126494,
    189660524,
    103843762,
    132421446,
    -6954534,
    -24631115,
    -30523756,
    -145766884,
    -106569806,
    113741104,
    -156784604,
    79302090,
    69913914,
    95931472,
    183952006,
    131608452,
    87323584,
    -151797906,
    -199294752,
    -48848702,
    80219158,
    103606722,
    193792492,
    152776500,
    149715138,
    149283324,
    -117789144,
    56231984,
    116714018,
  ])
);

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)
