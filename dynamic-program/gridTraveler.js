let count = 0;
const gridTraveler = (m, n, memo={}) =>{
    let key = m+','+n;
    if(key in memo) return memo[key];
    
    if(m==1 && n==1) {return 1};
    if(m==0 || n==0) {return 0};
    count++;
    memo[key] = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo);
    return memo[key];
};

// console.log(gridTraveler(1, 3));
// console.log(gridTraveler(2, 3));
// console.log(gridTraveler(3, 3)); 
console.log(gridTraveler(50, 50)); 
console.log(count);