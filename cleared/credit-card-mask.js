// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

function maskify(cc) {
    if(!cc){
        return '';
    }

    return cc.split('').map((x, i) => {
        if(cc.length - i > 4){
            return '#';
        }
        return x;
    }).join('');
}


const result = maskify('4556364607935616');
console.log('result :>> ', result);