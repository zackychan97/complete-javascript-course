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

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// Everything else is truthy
console.log(Boolean('Jonas'));
console.log(Boolean(1));


const money = 0;
if(money){
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}


let height;
if(height){
    console.log('Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

