//memoization


// let count = 0;
const fib = (n, memo={})=>{
    // count++;
    // console.log(count);
   if(n in memo) return memo[n];
    if(n<2) return 1;
    memo[n] = fib(n-1, memo)+fib(n-2, memo);
    return memo[n];
}


// console.log(fib(6));
console.log(fib(1));
console.log(fib(50));