// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s) {
    const middleLength = s.length / 2;
    return s.substring(s.length % 2 == 0 ? middleLength - 1 : middleLength, middleLength + 1 );
}

const result = getMiddle('test');
console.log('result :>> ', result);
