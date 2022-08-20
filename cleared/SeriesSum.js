//https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

function SeriesSum(n) {
  let sum = 0;
  for(let i=0;i<n;i++){
    sum = sum + (1/(1+3*i));
  }

  return Array(n).fill(0).map((e, i) => 3 * i + 1).reduce(
   //(s, e) => s + 1 / e, 0

    function(s, e){
      console.log(s);
      console.log(e);
      return s + 1 / e
    }
  ).toFixed(2);
  return sum.toFixed(2);
}

console.log(SeriesSum(3));

// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
