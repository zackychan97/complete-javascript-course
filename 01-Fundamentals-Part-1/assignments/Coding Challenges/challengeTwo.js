let markMass, markHeight, markBMI, johnMass, johnHeight, johnBMI, markHigherBMI;

markMass = 78;
markHeight = 1.69;

johnMass = 95;
johnHeight = 1.95;

markBMI = markMass / (markHeight ** 2);
johnBMI = johnMass / (johnHeight ** 2);

if (markBMI > johnBMI){
    console.log(`Mark's BMI is higher than John's.`);
} else {
    console.log(`John's BMI is higher than Mark's`)
}

console.log("Is Mark's BMI higher than John's? This statement is: ", markHigherBMI);

// Test 2
markMass = 95;
markHeight = 1.88;

johnMass = 85;
johnHeight = 1.76;

markBMI = markMass / (markHeight ** 2);
johnBMI = johnMass / (johnHeight ** 2);

markHigherBMI = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's? This statement is: ", markHigherBMI);

if (markBMI > johnBMI){
    console.log(`Mark's BMI is higher than John's.`);
} else {
    console.log(`John's BMI is higher than Mark's`)
}