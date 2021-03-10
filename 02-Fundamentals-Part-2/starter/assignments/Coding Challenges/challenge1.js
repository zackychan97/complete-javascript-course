const calcAverage = (score1, score2, score3) => {
    const average = (score1 + score2 + score3) / 3;
    return average;
}

const dolphinScore = calcAverage(44, 23, 71);
const koalaScore = calcAverage(65, 54, 49);

const dolphinScore2 = calcAverage(85, 54, 41);
const koalaScore2 = calcAverage(23, 34, 27);

const checkWinner = function(team1, team2, team1Name, team2Name){
    if (team1 >= (team2 * 2)){
        console.log(`${team1Name} wins averaging ${team1} vs ${team2}!!`);
    } else if (team2 >= (team1 * 2)){
        console.log(`${team2Name} wins averaging ${team2} vs ${team1}!!`)
    } else {
        console.log(`Either a draw or error.`)
    }
}


checkWinner(dolphinScore, koalaScore, 'Dolphins', 'Koalas');
checkWinner(dolphinScore2, koalaScore2, 'Dolphins', 'Koalas');