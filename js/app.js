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
    makeCard.addEventListener('click', clickingCards);
    makeCard.className="card";
    makeCard.innerHTML = `<i class = "fa ${allCards[i]}"></i>`
    deck.appendChild(makeCard);
}
shuffle(allCards);



function clickingCards(){
const makeCard = this
checkCards(makeCard)
innerHTML(makeCard)
}

function checkCards(makeCard){
if (clickedCards.length ===0){
    makeCard.classList.add("open", "show");
    clickedCards.push(this);
    }

if (clickedCards.length !==0 && clickedCards.length <=2){
    makeCard.classList.add("open", "show");
    clickedCards.push(this);
    }

else{
    if (clickedCards.length >=3){
     makeCard.classList.add("close", "noShow");
     const clearArray = clickedCards.splice(0,16);
 }

function innerHTML(makeCard){
if (clickedCards [1].innerHTML === clickedCards[2].innerHTML){
    makeCard.classList.add("matched");
    console.log("This is a match");
    }
    else
    {
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
