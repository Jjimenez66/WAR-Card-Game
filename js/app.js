/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let winner 
let loser = null
let tie =  null
let deck1 = []
let deck2 = []
let cardToRemove
let playerDeck 
let compDeck 
let value
let rank
let playerCardValue
let compCardValue
let getValue



/*------------------------ Cached Element References ------------------------*/
let deck1El = document.getElementById('player-deck',dealPlayer)
let deck2El = document.getElementById('deck-2')
let deck3El = document.getElementById('deck-3')
let deck4El = document.getElementById('comp-deck',dealComp)

/*----------------------------- Event Listeners -----------------------------*/
document.getElementById('btn').addEventListener('click', handleClick)
const shufPlay = document.getElementById('shuf').addEventListener('click',shuffle)

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
  shuffle(deck1)
  
}
function handleClick() {
  if(deck1.length >0) {
      let randIdx = Math.floor(Math.random()*deck1.length)
      
      let cardPicked = deck1.splice(randIdx, 1)[0]

      deck2.push(cardPicked)
      
      render(cardPicked)
      
    }
    shuffle(deck1)
    dealPlayer(deck1)
    dealComp(deck1)
    playHand()
    
  }

  function render(cardPicked){
    if (deck2.length === 1) {  
      deck2El.classList.remove("outline")
    }
    if (deck2.length > 1) {  
      deck2El.classList.remove(cardToRemove)
    }
    cardToRemove = cardPicked 
    deck2El.classList.add(cardPicked) 
    if (deck2.length === 26) {  
      deck2El.classList.add("shadow");
      deck1El.classList.remove("shadow");
    }
    if (deck1.length === 0) {  
      deck1El.classList.add("outline");
      deck1El.classList.remove("back-blue");
    }
}


function shuffle(deck1) {
  for (let i = deck1.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [deck1[i], deck1[j]] = [deck1[j], deck1[i]];
  } return deck1
  
} 

function dealPlayer(deck1){
  let newDeck = deck1.slice(0, deck1.length / 2); 
  playerDeck = newDeck
}

function dealComp(deck1){
  let newCompDeck = deck1.slice(deck1.length / 2); 
  compDeck = newCompDeck
}
// i need to design a function that when the Player hand and computer hand is played that the high card 
//  is the winner and collects  all the cards and puts it back in the winners hand. If it results in a tie I need to commence war with three cards down and the last one face up.
function getValue(card){

  let rank = card.slice(1)
  let value
}

function playHand(){
  let playerCardValue = getValue(deck2El[deck2El.length - 1])
  let compCardValue = getValue(deck3El[deck3El.length - 1])
  if (playerCardValue > compCardValue){
    winner = 'Player' 
    playerDeck.push(...playerDeck)
    playerDeck = []
  }
    if(compCardValue > playerCardValue){
      winner = 'Computer'
      compDeck.push(...compDeck)
      compDeck = []

    }else{
      tie = war()
    }
    
  }

  // function compareCard(){


  // }