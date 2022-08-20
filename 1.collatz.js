//https://www.codewars.com/kata/54fb963d3fe32351f2000102

function collatz(n) {
    //your code here
    let sequence = [];
    while(n!=1){
        sequence.push(n);
        if(!isOdd(n)){
            n=n/2;
        }else{
            n = (n*3) + 1;
        }
    }
    console.log(sequence);
    return sequence.length + 1;
}

function isOdd(num){
    return num%2!=0;
}

let result  = collatz(20);

console.log(result);


// The Collatz Conjecture states that for any natural number n, if n is even, divide it by 2. If n is odd, multiply it by 3 and add 1. If you repeat the process continuously for n, n will eventually reach 1.

// For example, if n = 20, the resulting sequence will be:

// [ 20, 10, 5, 16, 8, 4, 2, 1 ]
// Write a program that will output the length of the Collatz Conjecture for any given n.
// In the example above, the output would be 8.

// For more reading see: http://en.wikipedia.org/wiki/Collatz_conjecture