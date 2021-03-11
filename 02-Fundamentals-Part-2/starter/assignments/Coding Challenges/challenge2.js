function calcTip(bill){
    return (bill >= 50 && bill) <= 300 ? (tip = bill * .15) : (tip = bill * .2);
    
}

const firstTip = calcTip(100);
console.log(firstTip)

const bills = [125, 555, 44];
const bill1 = bills[0];
const bill2 = bills[1];
const bill3 = bills[2];

const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);

const tips = ['tips array', tip1, tip2, tip3];
console.log(tips)

const total1 = bill1 + tip1;
const total2 = bill2 + tip2;
const total3 = bill3 + tip3;

const totals = ['totals array'];
totals.push(total1);
totals.push(total2);
totals.push(total3);
console.log(totals);