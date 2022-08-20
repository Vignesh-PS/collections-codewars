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