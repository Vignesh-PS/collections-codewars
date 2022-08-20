//https://www.codewars.com/kata/5f0ed36164f2bc00283aed07/train/javascript


function overTheRoad(address, n){
    var leftHouses = new Array(n).fill(true).map((x, i)=>  { return 2+(i*2)}).reverse();

    console.log(Math.pow(2, 32));

    console.log(new ArrayBuffer(Math.pow(2, 32) - 1)    );

    var rightHouses = new Array(n).fill(true).map((x, i)=>  { return 1+(i*2)});

    console.log(leftHouses);

    var isRightSideAvailable = rightHouses.indexOf(address);
    var isLeftSideAvailable = leftHouses.indexOf(address);

    return rightHouses[isLeftSideAvailable] || leftHouses[isRightSideAvailable];

}

overTheRoad(20,10);





// Task
// You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:

// Street
// 1|   |6
// 3|   |4
// 5|   |2
// Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.

// Example
// Given your house number address and length of street n, give the house number on the opposite side of the street.

// overTheRoad(address, n)
// overTheRoad(1, 3) = 6
// overTheRoad(3, 3) = 4
// overTheRoad(2, 3) = 5
// overTheRoad(3, 5) = 8
// Both n and address could get upto 500 billion with over 200 random tests.