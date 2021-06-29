//_____ Elements _____//
const cards = document.querySelectorAll(".game-card");
const play = document.getElementById("play-again");
const score = document.getElementById("points");
const finalScore = document.getElementById("final-points");
const win = document.getElementById("win-message");
const correctMatches = document.getElementById("cardsMatched");

//_____ Variables _____//
let points = 0;
let finalPoints = 0;
let allCardsMatch = 0;
let pairs = 0;

//_____ Flip Card _____//
let cardFlipped = false;
let firstCard, secondCard;
let lockCards = false;

cards.forEach((card) => card.addEventListener("click", flipCard));

function flipCard() {
    if (lockCards) return;

    this.classList.add("flip");

    if (!cardFlipped) {
        cardFlipped = true;
        firstCard = this;

        return;
    }

    if (this === firstCard) return;

    secondCard = this;

    checkCards();
}

//_____ Check Card _____//
function checkCards() {
    let isMatch = firstCard.dataset.cards === secondCard.dataset.cards;

    isMatch ? cardsMatch() : cardsDontMatch();
}

//_____ Cards Match _____//
function cardsMatch() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    //Add points//
    points += 2000;
    score.innerHTML = points;

    //Final Score//
    finalPoints = points;
    finalScore.innerHTML = finalPoints;

    //All Cards Matched//
    allCardsMatch += 2;
    if (allCardsMatch === 12) {
        win.style.visibility = "visible";
    }

    //Cards Matched Counter//
    pairs = allCardsMatch;
    correctMatches.innerHTML = pairs;

    resetCards();
}

//_____ Cards Dont Match _____//
function cardsDontMatch() {
    lockCards = true;

    //Remove Points//
    points -= 500;
    score.innerHTML = points;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetCards();
    }, 1000);
}

//_____ Reset Cards _____//
function resetCards() {
    cardFlipped = false;
    lockCards = false;
    [firstCard, secondCard] = [null, null];

    console.log(firstCard, secondCard)
}

//_____ Shuffle Cards IIFE_____//
(function shuffle() {
    cards.forEach((card) => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

//_____ Play Again_____//
play.addEventListener("click", playAgain);

function playAgain() {
    location.reload();
}