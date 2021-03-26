// Activating Strict Mode
// 'use strict';

// const { type } = require("os");

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








// Introduction to Arrays

// const friend1 = "Michael";
// const friend2 = 'Steven';
// const friend3 = 'Peter';


// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]); 
// console.log(friends.length); //.length is a property of arrays
// console.log(friends.length - 1) // returns last element of an array

// friends[2] = 'Jay';
// console.log(friends);

// const jonas = ['Jonas', 'Schmedtmann', 2021 - 1991];

// const firstName = 'Jonas';
// const jonas2 = [firstName, 'Schmedtmann', 2021 - 1991, 'teacher', friends];

// console.log(jonas);
// console.log(jonas2);

// // Exercise
// const calcAge = function(birthYear){
//     return (2021 - birthYear);
// }
// const yearsArray = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(yearsArray[0]);
// const age2 = calcAge(yearsArray[1]);
// const age3 = calcAge(yearsArray[2]);

// console.log(age1, age2, age3);

// const ages = [calcAge(yearsArray[0]), calcAge(yearsArray[1]), calcAge(yearsArray[2]), calcAge(yearsArray[3])];
// console.log(ages);








// // Basic Array Operations (Methods)

// // Add to end of array
// const friends = ['Michael', 'Steven', 'Peter'];
// friends.push("Jay");
// console.log(friends);
// const newLength = friends.push("Dion"); // will store the length of new array
// console.log(newLength);

// // Add to beginning of array
// friends.unshift('John');
// console.log(friends);

// // Remove from the end of an array
// friends.pop(); // no arguments into function, just deletes last element of array
// console.log(friends);
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// // Remove from the beginning of an array
// friends.shift();
// console.log(friends);
// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);


// // Finding a specific index by Specific search
// console.log(friends.indexOf('Steven')); // tells us the index number of 'Steven' in our friends array


// // Seeing if a value/element is found anywhere at all in an array
// console.log(friends.includes('Steven'));







// Introduction to Objects

// // object literal syntax below
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2021 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }





// Dot vs Bracket Notation
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2021 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }
// console.log(jonas);

// // Dot notation below
// console.log(jonas.lastName);

// // Bracket Notation Below
// const nameKey = 'Name';
// console.log(jonas['lastName']);
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);



// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// // Say we enter "job" into our prompt, then the value of interestedIn becomes 'job' so we can get access to data below, because interestedIn === job
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// } else {
//     console.log(`Wrong request!`)
// }


// // Using dot notation to add new properties
// jonas.location = 'Portugal';

// // Using bracket notation to add new properties
// jonas['twitter'] = '@jonasSchmedtman';
// console.log(jonas);


// // Mini Challenge
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);








// // Object Methods

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
    
//     calcAge: function(){
//         console.log(this);
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function() {
//             return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has a ${this.hasDriversLicense ? 'a' : 'no'} driver's license`      
//     }
// }
// // console.log(jonas);
// // need to calcAge ONCE before we can access jonas.age()
// jonas.calcAge();

// console.log(jonas.age);
// console.log(jonas['age']);


// // Challenge
// // "Jonas is a 46 year old teacher, and he has a/no drivers license"
// console.log(jonas.getSummary());









// Iteration: the for loop

// console.log(`Lifting weights repetition 1 🏋️‍♂️`);
// console.log(`Lifting weights repetition 2 🏋️‍♂️`);
// console.log(`Lifting weights repetition 3 🏋️‍♂️`);

// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }







// // Looping arrays, breaking, and continuing

// // Looping over an array
// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2021 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// for(let i = 0; i < jonasArray.length; i++){
//     console.log(jonasArray[i], typeof jonasArray[i]);
// }




// // creating a new array based on values from another array, in practice.
// const types = []; // 1) create an empty array
// for(let i = 0; i < jonasArray.length; i ++){ // 2) set up for loop to run only for the length of the array we wish to get the data FROM 
//     types.push(typeof jonasArray[i]); // 3) put the data into the new array
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++){
//     ages.push(2021 - years[i]);
// }
// console.log(ages);

// // continue and break
// // only log strings to console. Will continue if a string. otherwise will start next loop until condition is met
// console.log(`---ONLY STRINGS---`)
// for (let i = 0; i < jonasArray.length; i++){
//     if(typeof jonasArray[i] !== 'string') continue;

//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// // Break once we see a number data type
// console.log(`---BREAK AT FIRST SIGHT OF TYPE NUMBER--`)
// for (let i = 0; i < jonasArray.length; i++){
//     if(typeof jonasArray[i] === 'number') break;

//     console.log(jonasArray[i], typeof jonasArray[i]);
// }







// // Looping Backwards and Loops in Loops
// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2021 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// // looping backwards
// for( let i = jonasArray.length - 1; i >= 0; i--){
//     console.log(jonasArray[i]);
// }



// // loop inside a loop
// for (let exercise = 1; exercise < 4; exercise++){
//     console.log(`---Starting exercise ${exercise}---`);

//     for (let rep = 1; rep < 6; rep++){
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//     }
// }






// // The While Loop

// // For loop below, to compare to the while loop following it
// for(let rep = 1; rep <= 10; rep++){
//     //console.log(`FOR: Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10){
//     //console.log(`WHILE: Lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log(`Loop is about to end...`);
// }