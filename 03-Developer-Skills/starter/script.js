// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const y = '23';
// const x = 23;
// if (x === 23) {
//   console.log(23);
// }

// const calcAge = birthYear => 2021 - birthYear;

// console.log("hello world");

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [ 5, 6, 'error', 102];

// const calcTempAmplitudeNew = function (t1, t2) {
//   // Combine the two arrays
//   const temps = t1.concat(t2);


  
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     // If we encounter 'error':
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') {
//       continue;
//     }

//     // Find MAX:
//     if (temps[i] > max) {
//       max = temps[i];
//     }
//     // Find MIN:
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//   }
//   console.log(max, min);
//   return (max - min);
// };

// calcTempAmplitudeNew([24, 36, 7, 90], [4, 3, 2, 99]);
// const amplitude = calcTempAmplitudeNew(temperatures, temperatures2);
// console.log(amplitude);












// Debugging Lecture

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // C) Fix the Bug
//     value: Number(prompt('Degrees Celsius: ')),
//   }


//   // console.log(measurement);
//   // B) Find the bug
//   console.table(measurement);
//   console.log(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// }
// // A) Identify
// console.log(measureKelvin());