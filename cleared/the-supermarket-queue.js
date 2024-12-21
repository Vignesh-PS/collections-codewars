// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/javascript

function queueTime(customers, n) {
    let queues = new Array(n).fill(0);

    for(const waitTime of customers){
        queues[0] += waitTime;
        queues = queues.sort((a, b) => a-b);
    }
    
    return Math.max(...queues);
}

const result = queueTime([1, 2, 3, 4, 5], 100);
// const result = queueTime([1,2,3,4], 1);
// const result = queueTime([2,2,3,3,4,4], 2);
// const result = queueTime([ 10, 2, 3, 3 ], 2);
console.log('result :>> ', result);