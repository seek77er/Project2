/*
 * Create a list that holds all of your cards
 */
const allCards = ["fa-cubes", "fa-bomb", "fa-diamond", "fa-paper-plane-o", "fa-cube", "fa-bicycle",
"fa-leaf", "fa-bolt", "fa-cubes", "fa-bomb", "fa-leaf", "fa-bolt", "fa-bicycle", "fa-cube", "fa-diamond", "fa-paper-plane-o"];


let clickedCards = [];

const deck = document.querySelector(".deck")


//create the cards

for (let i=0;i<16;i++) {
    let makeCard = document.createElement("li");
    makeCard.className="card";
    makeCard.innerHTML = `<i class = "fa ${allCards[i]}"></i>`
    deck.appendChild(makeCard);
    makeCard.addEventListener('click', clickingCards);
}
shuffle(allCards);



function clickingCards(){
const makeCard = this
firstCard(makeCard)

checkingMatch(makeCard)

}

function firstCard(makeCard){
if (clickedCards.length ===0){
    makeCard.classList.add("open", "show");
    clickedCards.push(makeCard);
    console.log("Pick another card");
    }
    else if (clickedCards.length ===1 && clickedCards.length !==0){
    makeCard.classList.add("open", "show");
    /*makeCard.classList.add("card");*/
    }
}

function secondCard(makeCard){
if (clickedCards.length !==0 && clickedCards.length <2){
    makeCard.classList.add("open", "show");
    clickedCards.push(makeCard);
    }

    else if (clickedCards.length ===2){
      checkingMatch(clickedCards);
     makeCard.classList.add("card");
     clickedCards = [];
    }
}
function checkingMatch(makeCard){
  let checkFirstcard.innerHTML = clickedCards[0]
  let checkSecondcard.innerHTML = clickedCards[1];
if (clickedCards[0] === clickedCards[1] && clickedCards.length ===2){
    makeCard.classList.add("matched");
    console.log("This is a match");
    }
    else if (clickedCards[0] !== clickedCards[1] && clickedCards.length ===2){
    console.log ("This is not a match");
    clickedCards = [];
  }


}





// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
