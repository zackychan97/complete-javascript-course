'use strict';

// // Scoping in Practice
// function calcAge(birthYear) {
//   const date = new Date();
//   const currentYear = date.getUTCFullYear();
//   const age = currentYear - birthYear;
//   console.log(firstName); // firstName is global variable, therefor through scope chain will be available inside this function

//   function printAge() {
//     let output = `You are or will be ${age} this year, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 <= 1996) {
//       var notBlockScoped = true; // var will be available outside the block (pre-ES6)
//       // new block scope
//       const firstName = 'Steven'; //(new variable w same variable name as parent scope)
//       output = 'NEW OUTPUT!!'; //(reassign new value to existing variable name in parent scope)
//       const str = `Oh, and you're a millenial, ${firstName}`; // since using const (or let), this will be block scoped
//       console.log(str);
//       //   if we put a function here, we can call it outside of the IF block under one circumstance: we are NOT in strict mode.
//     }
//     console.log(notBlockScoped); // console.logged outside of the if block. Still works bc var is not blocks scoped.
//     console.log(output); // Will be our value we reassigned inside child scope
//   }
//   printAge();

//   return age;
// }

// const firstName = 'John';
// calcAge(1991);

// // Hoisting in practice
// // Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// // Functions
// console.log(addFuncDecl(2, 3)); // We can call the function declaration before it is defined
// console.log(addFuncExpr(9, 9)); // Since we are using const, this function is not hoisted. We will not have a reference to the function. If we used var, it would be hoisted, but set to undefined, therefor also unusable.
// console.log(addFuncArrow(10, 10)); // Since we are using const, this function is not hoisted. We will not have a reference to the function. If we used var, it would be hoisted, but set to undefined, therefor also unusable.

// function addFuncDecl(a, b) {
//   return a + b;
// }

// const addFuncExpr = function (a, b) {
//   return a + b;
// };

// const addFuncArrow = (a, b) => a + b;

// // The this Keyword in Practice
// console.log(this); // Will be the window object

// const calcAge = function (birthYear) {
//   console.log(2021 - birthYear);
//   console.log(this); // Will be undefined (since we are in strict mode. If not in strict mode, it would also be the window object)
// };

// calcAge(1990);

// const calcAgeArrow = birthYear => {
//   console.log(2021 - birthYear);
//   console.log(this); // Will be the window object. The arrow function DOES NOT get its own this keyword, so it uses the THIS values of its parent. And in this case, the parent is the global scope
// };
// calcAgeArrow(1980);

// const jonas = {
//   birthYear: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2021 - this.birthYear);
//   },
// };
// jonas.calcAge(); // since jonas is the object calling calcAge, jonas will provide the THIS values to the calcAge function

// const matilda = {
//   birthYear: 2017,
// };

// matilda.calcage = jonas.calcAge; // method borrowing so we don't have to rewrite
// console.log(matilda);

// matilda.calcAge(); // since matilda is now the object calling calcAge, matilda will provide the THIS values to the calcAge function

// const f = jonas.calcAge;
// f();

// // Regular Functions vs Arrow Functions
// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // Solution 1 (Pre ES6)
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.greet(); // will return undefined, bc greet is an arrow function and thus doesn't have "this". if we declare firstName as a var in the global scope, it will look at that. Which is obviously dangerous. Don't do that!!!
// jonas.calcAge();

// // Argument Key Word
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 10, 30);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 3); // returns undefined bc there is no lexical arguments keyword for addArrow to look at since it is an arrow function.

//
//
//
//
// Primitives vs Objects in Practice
// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName); // will be Davis and Williams because each primitive value is saved into its own piece of memory in the call stack. oldLastName is looking at lastNames first stored memory. Davis is looking at a different memory cell

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica); // both will be Davis because this didn't create a new object in the heap, its just a new variable in the call stack that points to the same memory address in the heap. So, if we change a property on marriedJessica, it will change it on jessica object as well

// Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Milo', 'Diesel'],
};

const jessicaCopy = Object.assign({}, jessica2); // will merge an empty object and jessica2 object. So basically a way of copying an object
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Test');
console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
