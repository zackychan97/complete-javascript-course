// Activating Strict Mode
// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// // use strict allows us to see in console that hasDriverLicense isn't defined
// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense){
//     console.log(`I can drive :D`);
// }

// // strict mode adds certain features JS may implement in the future. interface is now reserved word under strict mode
// const interface = 'Audio';






// Functions
// function helloWorld(){
//     console.log("Hello World from inside the function");
// }
// helloWorld(); // invoking, calling, running the function. All mean the same thing


// function logger(inputString){
//     console.log(inputString);
// }

// logger("Logging with an argument input into function call");
// logger("Logging with a new arg!!!!!");

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges. 🥤`;
//     return juice; // we will return the juice data/info/value
// }

// const appleJuice = fruitProcessor(5, 0); // the juice was returned here, but we can't really access it unless we store it into a variable
// console.log(appleJuice); // now we can see our string we returned from the fruitProcessor function

// const orangeJuice = fruitProcessor(0, 4); 
// console.log(orangeJuice);







// Function Declarations vs Expressions
// Declaration below
// function calcAgeDeclaration(birthYear){
//     // const age = 2037 - birthYear;
//     // return age;
//     // or...
//     return 2037 - birthYear;
// }

// const age1 = calcAgeDeclaration(1997);
// console.log(age1);


// // function expression below
// // also called anonymous function (bc no function name)
// const calcAgeExpression = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAgeExpression(1997);

// console.log(age1, age2);







// Arrow Functions

// Function Expression below
const calcAgeExpression = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow Function below (doesn't need to be assigned to variable)
const calcAgeArrow = birthYear => 2037 - birthYear;
const ageArrowFunction = calcAgeArrow(1997);
console.log(ageArrowFunction);

const yearsUntilRetirement = birthYear => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${retirement} years left`;
}

console.log(yearsUntilRetirement(1991));


const fruitBlender = (apples, oranges) => {
    const juice = `Juice with ${apples} apples and ${oranges} oranges. 🥤`;
    return juice; // we will return the juice data/info/value
}

console.log(fruitBlender(5, 4));