//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
  // TODO
  let message = "";
  switch (names.length) {
    case 0:
      message = "no one likes this";
      break;
    case 1:
      message = names[0] + " likes this";
      break;
    case 2:
      message = names[0] + " and " + names[1] + " like this";
      break;
    case 3:
      message = names[0] + ", " + names[1] + " and " + names[2] + " like this";
      break;
    default:
      message =
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this";
      break;
  }
  return message;
}

let result = likes(["Max", "John", "Mark", "4th"]);
console.log(result);
