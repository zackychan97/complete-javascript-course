const bills = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
];

const tips = [];
const totals = [];

function calcTip(bill){
    return (bill >= 50 && bill) <= 300 ? (tip = bill * .15) : (tip = bill * .2);
}

for (i = 0; i < bills.length; i++){
    tip = calcTip(bills[i]);
    tips.push(tip);

    totals.push(bills[i] + tip)
}

console.log(tips);
console.log(totals);


function calcAverage(arr){
    let sum = 0;
    for (i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return (sum / arr.length);
}

calcAverage(totals);
