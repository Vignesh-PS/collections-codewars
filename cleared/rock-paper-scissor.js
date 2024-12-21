// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

const rps = (p1, p2) => {

    let isP1Win = false;
    if (p1 == p2) {
        return 'Draw!';
    }

    switch (p1) {
        case 'scissors': {
            if (p2 == 'paper') {
                isP1Win = true;
            }
            break;
        }
        case 'paper': {
            if (p2 == 'rock') {
                isP1Win = true;
            }
            break;
        }
        default: {
            if (p2 == 'scissors') {
                isP1Win = true;
            }
            break;
        }
    }

    return isP1Win ? 'Player 1 won!' : 'Player 2 won!';
};

const result = rps('scissors', 'rock');
console.log('result :>> ', result);