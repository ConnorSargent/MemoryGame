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

    console.log(firstCard,secondCard)
}

