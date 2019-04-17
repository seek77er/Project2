/*
 * Create a list that holds all of your cards
 */
const allCards = ["fa fa-cat", "fa fa-cube", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-bomb", "fa fa-bicycle",
"fa fa-leaf", "fa fa-bolt", "fa fa-cube", "fa fa-cat", "fa fa-leaf", "fa fa-bolt", "fa fa-bicycle", "fa fa-bomb", "fa fa-diamond", "fa fa-paper-plane-o"];


let clickedCards = [];

const deck = document.querySelector(".deck")
//create the cards

for (let i=0;i<16;i++) {
    let makeCard = document.createElement("li");
    makeCard.className="card";
    makeCard.innerHTML = `<i class = “fa ${allCards[i]}”></i>`
    deck.appendChild(makeCard);
}
shuffle(allCards);

document.addEventListener('click', clickingCards);

function clickingCards(){
const makeCard = document.getElementsByTagName('li')

if (clickedCards.length ===0){
    makeCard.classList.add("opwn", "show");
    clickedCards.push(this);
    }
if (clickedCards.length ===1){
    makeCard.classList.add("open", "show");
    clickedCards.push(this);
    }
if (this.innerHTML === clickedCards[0].innerHTML){
    makeCard.classList.add("matched");
    console.log("This is a match");
    }
    else
    if (clickedCards.length ===2){
    console.log ("This is not a match");
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
