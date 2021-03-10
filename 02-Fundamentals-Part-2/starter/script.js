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







// // Arrow Functions

// // Function Expression below
// const calcAgeExpression = function (birthYear) {
//     return 2037 - birthYear;
// }

// // Arrow Function below (doesn't need to be assigned to variable)
// const calcAgeArrow = birthYear => 2037 - birthYear;
// const ageArrowFunction = calcAgeArrow(1997);
// console.log(ageArrowFunction);

// const yearsUntilRetirement = birthYear => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     return `${retirement} years left`;
// }

// console.log(yearsUntilRetirement(1991));


// const fruitBlender = (apples, oranges) => {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges. 🥤`;
//     return juice; // we will return the juice data/info/value
// }

// console.log(fruitBlender(5, 4));







// Functions Calling Other Functions

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces. 🥤`;
//     return juice; // we will return the juice data/info/value
// }
// console.log(fruitProcessor(3, 2));





// Reviewing Functions

// const calcAge = function(birthYear){
//     return 2021 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName){
//     const age = calcAge(birthYear)
//     const retirement = 65 - age;

//     if (retirement > 0){
//         console.log(`${firstName} has ${retirement} years left`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired!`);
//         return -1;
//     }
//     }

//     console.log(yearsUntilRetirement(1997, 'Zack'));
//     console.log(yearsUntilRetirement(1950, 'Mike'));








    const calcAverage = (score1, score2, score3) => {
        const average = (score1 + score2 + score3) / 3;
        return average;
    }
    
    const dolphinScore = calcAverage(44, 23, 71);
    const koalaScore = calcAverage(65, 54, 49);

    const dolphinScore2 = calcAverage(85, 54, 41);
    const koalaScore2 = calcAverage(23, 34, 27);

    const checkWinner = function(team1, team2, team1Name, team2Name){
        if (team1 >= (team2 * 2)){
            console.log(`${team1Name} wins averaging ${team1} vs ${team2}!!`);
        } else if (team2 >= (team1 * 2)){
            console.log(`${team2Name} wins averaging ${team2} vs ${team1}!!`)
        } else {
            console.log(`Either a draw or error.`)
        }
    }
    
    
    checkWinner(dolphinScore, koalaScore, 'Dolphins', 'Koalas');
    checkWinner(dolphinScore2, koalaScore2, 'Dolphins', 'Koalas');

