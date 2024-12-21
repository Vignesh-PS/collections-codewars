// https://www.codewars.com/kata/5539fecef69c483c5a000015/train/javascript

const memo = {};
function backwardsPrime(start, stop) {
    const allPrimes = [];
    for (let i = start; i <= stop; i++) {
        memo[i] = isPrime(i);
        if (memo[i]) {
            allPrimes.push(i);
        }
    }

    const resultArr = allPrimes.filter(x => {
        memo[x] = isPrime(parseInt(reverseNum(x)));
        return x > 10 && memo[x];
    })

    return resultArr;
}

const isPrime = (n) => {
    if (n <= 1) {
        return false;
    }
    if(memo[n]){
        return memo[n];
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

const reverseNum = (n) => {
    return n.toString().split('').reverse().join('');
}

const result = backwardsPrime(92310, 93722);

console.log('result :>> ', result);