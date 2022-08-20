count = 0;
let fact = (n)=>{
    count++;
    //console.log(count);
    if(n<=1) return 1;

    return n*fact(n-1);
}



console.log(fact(2500));
// console.log(fact(2));
// console.log(fact(2));
// console.log(fact(2));