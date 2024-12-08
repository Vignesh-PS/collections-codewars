// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(string) {
    if(string?.length > 0){
        let strWords = string.split(' ');
        strWords = strWords.map(x => {
            if(x?.length >= 5 ){
                x = x.split('').reverse().join('');
            }
            return x;
        });
        return strWords.join(' ');
    }
}

// const result = spinWords('Hey fellow warriors');
const result = spinWords('Welcome');
console.log('result :>> ', result);
