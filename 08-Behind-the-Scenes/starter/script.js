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

// Functions
console.log(addFuncDecl(2, 3)); // We can call the function declaration before it is defined
console.log(addFuncExpr(9, 9)); // Since we are using const, this function is not hoisted. We will not have a reference to the function. If we used var, it would be hoisted, but set to undefined, therefor also unusable.
console.log(addFuncArrow(10, 10)); // Since we are using const, this function is not hoisted. We will not have a reference to the function. If we used var, it would be hoisted, but set to undefined, therefor also unusable.

function addFuncDecl(a, b) {
  return a + b;
}

const addFuncExpr = function (a, b) {
  return a + b;
};

const addFuncArrow = (a, b) => a + b;
