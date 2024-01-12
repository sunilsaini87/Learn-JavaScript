let score = 33;
let score2 = null;
let score3 = undefined;
let score4 = true;
let score1 = "33acc";

console.log(typeof score);
console.log(typeof score1);

let typeInNumber = Number(score1);
let typeInNumber1 = score1;
console.log(typeof typeInNumber);
console.log(typeInNumber1);
console.log(typeInNumber); // not a number

// When a number is added to a string, JavaScript converts the number to a string before concatenation

// "33"  => 33
// "33abc"  => NaN     not a number
// true =>  1; false => 0

let loggedIn = 1;
let loggedIn1 = "";
let loggedIn2 = "sunil";

let booleanloggedIn = Boolean(loggedIn2);
console.log(booleanloggedIn);

// number to string
