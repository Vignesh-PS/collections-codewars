//https://www.codewars.com/kata/5287e858c6b5a9678200083c/javascript

function narcissistic(value) {
  const numLength = value.toString().length;
  let numbers = value.toString().split("");
  let total = 0;
  numbers = numbers.map((num) => {
    const resNum = +num + numLength;
    total = total + resNum;
    return resNum;
  });
  return total === value;
}

let result = narcissistic(153);
console.log("result :>> ", result);
