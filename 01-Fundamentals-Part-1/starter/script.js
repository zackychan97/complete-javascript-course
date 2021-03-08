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





// // Operator Precedence
// const now = 2021;

// const ageKaleb = 23;
// const ageMom = 50;

// console.log(now - 1997 > now - 1998)
// console.log(ageKaleb, ageMom);

// const averageAge = (ageKaleb + ageMom) / 2;







// Template Literals

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// // Old way
// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!'

// // ES6 Template Literal Way
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

// console.log(jonasNew);

// // Multi Line String Pre ES6
// console.log('String with \n\
// multiple \n\
// lines');

// // Multi Line with ES6
// console.log(`String
// multiple
// lines`);





// Taking Decisions: If / else Statements

// const age = 15;
// const isOldEnough = age >= 18;

// if(isOldEnough){
//     console.log(`Sarah can start driving license 🚘`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah cannot start her driving license 🚫.
// She must wait another ${yearsLeft} years.`)
// }




// const birthYear = 1991;
// let century;
// if(birthYear <= 2000){
//     century = 20;

// } else {
//     century = 21;
// }
// console.log(century);







// Type Conversion and Coercion

// Type Conversion:
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(String(23));

// // Type Coercion:
// console.log('I am ' + 23 + ' years old.');
// console.log( '23' - '10' - 3);
// console.log('23' / '2');
// console.log('23' > '18');







// Truthy and Falsy Values
// JS has 5 falsy values when converted to boolean: 0, '' (empty string), undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// // Everything else is truthy
// console.log(Boolean('Jonas'));
// console.log(Boolean(1));


// const money = 0;
// if(money){
//     console.log("Don't spend it all");
// } else {
//     console.log("You should get a job!");
// }


// let height;
// if(height){
//     console.log('Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// }





// Equality Operators: == vs ===
// === does NOT perform type coercion
// using === is best practice

// const age = 18;
// if (age === 18) {
//     console.log(`Age is: ${age}`);
// }

// // == does perform type coercion
// const newAge = '18';
// if (newAge == 18) {
//     console.log(`newAge is: ${newAge}`);
// }

// console.log(age == newAge);

// // we can get a value from the user
// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);

// // loose (does type coercion)
// if (favorite == 7){
//     console.log("7 is a good number")
// }
// // no type coercion (strict)
// if (favorite === 7) {
//     console.log("=== 7")
// }


// // else if
// if (favorite === 23) {
//     console.log("23 is a good number")
// } else if (favorite === 7) {
//     console.log("7 is a good number")
// } else {
//     console.log("Number is not 7 or 23")
// }

// // how to see if something is not equal to something
// // we can see if something is different from another
// if (favorite !== 23) {
//     console.log("Why not 23?")
// }




// Boolean Logic
// And, Or, and Not Operators (These are only some of the boolean logic operators)


// Logical Operators

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(!hasDriversLicense);

// const newHasDriversLicense = true;
// const newHasGoodVision = false;

// console.log(hasDriversLicense || hasGoodVision);

// // const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (shouldDrive){
// //     console.log("Person should drive");
// // } else {
// //     console.log("Someone else should drive");
// // }

// const isTired = true;

// console.log(hasDriversLicense || hasGoodVision || isTired);

// const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

// if (shouldDrive){
//     console.log("Person should drive");
// } else {
//     console.log("Someone else should drive");
// }






// The Switch Statement
// const day = 'saturday';

// switch (day) {
//     case 'monday':
//         console.log(`Today is Monday.`);
//         console.log(`You have class today!`);
//         break;
//     case 'tuesday':
//         console.log(`Today is Tuesday`);
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log(`Today is either Wednesday or Thursday`);
//         break;
//     case 'friday':
//         console.log(`Today is Friday`);
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log(`its the weekend`);
//         break;
//     default:
//         console.log(`not a valid input`);
//         break;
// }


// if (day === 'monday'){
//     console.log(`Today is Monday.`);
//     console.log(`You have class today!`);
// } else if (day === 'tuesday'){
//     console.log(`Today is Tuesday`);
// } else if (day === 'wednesday' || day === 'thursday'){
//     console.log(`Today is either Wednesday or Thursday`);
// } else if (day === 'friday'){
//     console.log(`Today is Friday`);
// } else if (day === 'saturday' || day === 'sunday'){
//     console.log(`its the weekend`);
// } else {
//     console.log(`not a valid input`);
// }






// Statements and Expressions (and differences between the two)
// An expression is a piece of code that produces a VALUE
// 3 + 4, 1991, true && false && !false are all EXPRESSIONS


// A statement is like a bigger piece of code that is execute and does not produce a value on itself
// expressions can be part of a statement, however, the statement isn't itself returning a value.

// This is an if statement that uses an expression to logically decide if the computer should execute the code/statement
// if(23>10){
//     const str = '23 is bigger';
// }






//  The Conditional (Ternary) Operator
// similar to an if else statement in one line
// const age = 23;
// // read as: if age >= 18 'I like to drink beer 🍺' else 'I like to drink water 💧'
// age >= 18 ? console.log(`I like to drink beer 🍺`) : console.log(`I like to drink water 💧`);

// // an operator produces a value (an operator is therefor an expression)

// const drink = age >= 18 ? 'beer 🍺' : 'water 💧';
// console.log(drink); 

// let drink2;
// if (age >= 18){
//     drink2 = 'beer 🍺';
// } else {
//     drink2 = 'water 💧';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'beer 🍺' : 'water 💧'}`)
