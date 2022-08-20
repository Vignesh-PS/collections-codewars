//https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function rgb(r, g, b){
  
  var hex = [];

  for(let i = 0; i<arguments.length; i++){

    if(arguments[i]>255){
      arguments[i] = 255;
    }else if(arguments[i] < 0){
      arguments[i] = '00';
    } else if(arguments[i] < 16){
      arguments[i] = '0'+arguments[i].toString(16);
    }Ā
    arguments[i] = arguments[i].toString(16);
    hex.push(arguments[i])

  }
  return hex.map(x=> x.toUpperCase()).join('');
}

console.log(rgb(255,255,255));



// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3