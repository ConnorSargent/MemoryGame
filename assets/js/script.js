//_____ Elements _____//
const cards = document.querySelectorAll(".game-card");

//_____ Variables _____//


//_____ Flip Card _____//
let cardFlipped = false;
let firstCard, secondCard;

cards.forEach((card) => card.addEventListener("click", flipCard));

function flipCard() {
   this.classList.add("flip");

    if (!cardFlipped) {
        cardFlipped = true;
        firstCard = this;

        return;
    }

    cardFlipped = false;
    secondCard = this;

    checkCards();
}

//_____ Check Card _____//
function checkCards() {
    let isMatch = firstCard.dataset.cards === secondCard.dataset.cards;

    isMatch ? cardsMatch() : cardsDontMatch();

    console.log(firstCard.dataset.cards,secondCard.dataset.cards)
}

//_____ Cards Match _____//
function cardsMatch() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
}

//_____ Cards Dont Match _____//
function cardsDontMatch() {

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
    }, 1000);
}