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
function helloWorld(){
    console.log("Hello World from inside the function");
}
helloWorld(); // invoking, calling, running the function. All mean the same thing


function logger(inputString){
    console.log(inputString);
}

logger("Logging with an argument input into function call");
logger("Logging with a new arg!!!!!");

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges. 🥤`;
    return juice; // we will return the juice data/info/value
}

const appleJuice = fruitProcessor(5, 0); // the juice was returned here, but we can't really access it unless we store it into a variable
console.log(appleJuice); // now we can see our string we returned from the fruitProcessor function

const orangeJuice = fruitProcessor(0, 4); 
console.log(orangeJuice);
