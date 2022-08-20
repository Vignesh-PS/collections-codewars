//https://www.codewars.com/kata/546e2562b03326a88e000020/solutions/javascript

function squareDigits(num){
    return  parseInt(num.toString().split('').map(i=>i*i).join(''));
  }


  console.log(squareDigits(9119));