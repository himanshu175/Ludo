var score, roundScore, dice, activePlayer, score0, score1;
init();

document.querySelector('.roll-dice').addEventListener('click', function () {
    dice = Math.floor(Math.random() * 6) + 1;
    img = document.querySelector('.img');
    img.src = "dice-" + dice + ".jpg";

    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = dice;

        score[activePlayer] += dice;
        document.querySelector('.score-' + activePlayer).textContent = score[activePlayer];
    } else {
        document.querySelector('.player-0').classList.toggle('active');
        document.querySelector('.player-1').classList.toggle('active');

        document.querySelector('#current-0').textContent = 0;
        document.querySelector('#current-1').textContent = 0;

        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    }
    if (score[activePlayer] >= 100) {
        document.querySelector('.roll-dice').style.display = 'none';
        img = document.querySelector('.img').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.plyr-' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.plyr-' + activePlayer).style.color = 'red';
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    nextStep();
})

document.querySelector('.new-game').addEventListener('click', function () {

})

function nextStep() {
    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');

    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    // document.querySelector('.dice-img').style.display = "none";
    roundScore = 0;

    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //     activePlayer = 0;
    // }
}
document.querySelector('.new-game').addEventListener('click', init);

function init() {
    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.plyr-0').textContent = 'PLAYER 1';
    document.querySelector('.plyr-1').textContent = 'PLAYER 2';
    document.querySelector('.plyr-0').style.color = 'black';
    document.querySelector('.plyr-1').style.color = 'black';
    document.querySelector('.score-0').textContent = 0;
    document.querySelector('.score-1').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('.roll-dice').style.display = 'inline';
    img = document.querySelector('.img').style.display = 'inline';
    document.querySelector('.btn-hold').style.display = 'inline';
}