// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/javascript

function queueTime(customers, n) {
    let queues = new Array(n).fill(0).map(x => 1);

    console.log('customers, n :>> ', customers, n);
    
    let totalTime = 0;
    let checkoutStart = true;
    while (customers.length != 0) {
        console.log('queue');
        for (let i = 0; (i < queues.length && customers.length > 0); i++) {

            if (checkoutStart) {
                totalTime += getFirstQueueMax(customers, n);
                checkoutStart = false;
                continue;
            }
            const occupiedTime = customers.pop();

            if (!occupiedTime) {
                continue;
            }
            console.log('occupiedTime :>> ', occupiedTime);

            console.log('queues :>> ', queues);
            console.log('getMinQueueInd(queues) :>> ', getMinQueueInd(queues));
            if (i == getMinQueueInd(queues)) {
                queues = queues.map(x => x - occupiedTime);
                if(queue[i] < occupiedTime){
                    queues[i] = occupiedTime;
                    totalTime += occupiedTime;
                }
            }
        }
    }

    return totalTime;
}

const getFirstQueueMax = (customers, n) => {
    const firstQueue = customers.splice(0, n);
    return Math.max(...firstQueue);
}

const getMinQueueInd = (queues) => {
    const min = Math.min(...queues.filter(x => x > 0));
    return queues.indexOf(min);
}

// const result = queueTime([1, 2, 3, 4, 5], 100);
// const result = queueTime([1,2,3,4], 1);
// const result = queueTime([2,2,3,3,4,4], 2);
const result = queueTime([ 10, 2, 3, 3 ], 2);
console.log('result :>> ', result);