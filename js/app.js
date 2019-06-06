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
pickAcard(makeCard)
/*clickingCards(makeCard);

/*checkingMatch(makeCard)*/

}

function pickAcard(makeCard){
if (clickedCards.length ===0){
    makeCard.classList.add("open", "show");
    clickedCards.push(makeCard);
    console.log("Pick another card");
    }
    else if (makeCard.innerHTML.contains("show"){
      console.log("You have already selected this card");
      clickedCards.pop(makecard);
    }
    else if ((clickedCards.length ===1){
      makeCard.classList.add("open", "show");
      clickedCards.push(makeCard);
    }
      /*else if (clickedCards.length >2){
      checkingMatch(clickedCards);
      makeCard.classList.add("card");
      console.log("You can only pick two cards");
    }*/

}

function checkingMatch(makeCard){
  let checkFirstcard = clickedCards[0]
  let checkSecondcard = clickedCards[1];
if (checkFirstcard === checkSecondcard && clickedCards.length ===2){
    makeCard.classList.add("matched");
    console.log("This is a match");
    }
    else if (checkFirstcard !== checkSecondcard && clickedCards.length ===2){
    console.log ("This is not a match");
    /*clickedCards = [];*/
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
