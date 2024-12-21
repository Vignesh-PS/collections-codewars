// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

function solution(string) {
    return string.replaceAll(/([A-Z])/g, ' $1');
}

const result = solution('camelCasing');
console.log('result :>> ', result);