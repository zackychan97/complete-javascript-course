const dolphinsAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log(`Dolphins average more points: ${dolphinsAverage} compared to ${koalasAverage}`)
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log(`Koalas average more points: ${koalasAverage} compared to ${dolphinsAverage}`)
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log(`The teams average the same amount of points: ${dolphinsAverage} and once again ${koalasAverage} points per game.`)
} else {
    console.log(`Neither team meets the criteria to win. The criteria is being > than the other team's avg ppg and you must average at least 100 ppg`)
}
