const bill = 250;
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
console.log(tip);
console.log(`The bill value of $${bill} plus the tip of $${tip} equates to a grand total of $${bill + tip}`);