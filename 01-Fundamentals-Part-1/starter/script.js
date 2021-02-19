// 1.
// let js = "amazing";
// if (js === 'amazing') alert("JavaScript is FUN!");

// console.log(40 + 8 + 23 - 10);

// let firstName = "Zack";
// console.log(firstName);





// 2.
// let jsIsFun = true;
// console.log(jsIsFun);
// console.log(typeof true);





// 3.
// mutating a variable with let
// let age = 30;
// age = 31;

// // keeping a variable constant with const
// const birthYear = 1990;
// // birthYear = 1991; will not work

// var job = 'programmer';
// job = 'teacher'; // looks like var and let are the same, but they are different






// 4.
// let year = 2021;
// const ageSomeone = year - 1996;
// const ageSomeoneElse = year - 2010;
// console.log(ageSomeone, ageSomeoneElse);
// console.log(ageSomeoneElse * 2, ageSomeone * 2);
// console.log(2 ** 3); // 2 to the power of 3 (2 * 2 * 2)

// // we can use the + operator to combine/concatenate strings
// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// // Assignment operators
// let x = 10 + 5; // x = 15;
// console.log("X equals: ", x);
// x += 10 // x = x + 10 (x now === 25)
// console.log("X equals: ", x);
// x *= 4;
// console.log("X equals: ", x);
// x++;
// console.log("X equals: ", x);
// x--;
// console.log("X equals: ", x);


// // Comparison operators
// console.log(ageSomeone > ageSomeoneElse); // true
// const isFullAge = ageSomeone > 18;





// Operator Precedence
const now = 2021;

const ageKaleb = 23;
const ageMom = 50;

console.log(now - 1997 > now - 1998)
console.log(ageKaleb, ageMom);

const averageAge = (ageKaleb + ageMom) / 2;