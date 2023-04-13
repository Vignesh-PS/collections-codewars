// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

function rowSumOddNumbers(n) {
    if(n<=1){
        return 1;
    }

    const firstNum = (n * (n-1)) + 1;
    let numArray = new Array(n).fill(0);

    numArray = numArray.map((num, i) => firstNum + (i*2));
    return numArray.reduce((a, b) => a+b);
}

// const rowSumOddNumbers = n => n**3;

const output = rowSumOddNumbers(3);
console.log('output :>> ', output);

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8