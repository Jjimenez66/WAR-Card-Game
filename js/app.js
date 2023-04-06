/*-------------------------------- Constants --------------------------------*/
const cardValues = {
  'dA': 14, 'dK': 13, 'dQ': 12, 'dJ': 11, 'd10': 10, 'd09': 9, 'd08': 8, 'd07': 7, 'd06': 6, 'd05': 5, 'd04': 4, 'd03': 3, 'd02': 2,
  'hA': 14, 'hK': 13, 'hQ': 12, 'hJ': 11, 'h10': 10, 'h09': 9, 'h08': 8, 'h07': 7, 'h06': 6, 'h05': 5, 'h04': 4, 'h03': 3, 'h02': 2,
  'cA': 14, 'cK': 13, 'cQ': 12, 'cJ': 11, 'c10': 10, 'c09': 9, 'c08': 8, 'c07': 7, 'c06': 6, 'c05': 5, 'c04': 4, 'c03': 3, 'c02': 2,
  'sA': 14, 'sK': 13, 'sQ': 12, 'sJ': 11, 's10': 10, 's09': 9, 's08': 8, 's07': 7, 's06': 6, 's05': 5, 's04': 4, 's03': 3, 's02': 2
};
deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]



/*-------------------------------- Variables --------------------------------*/
let playerDeck = []
let playerZone = []
let computerZone= []
let computerDeck= []
let cardToRemove
let computerCardToRemove



/*------------------------ Cached Element References ------------------------*/


let playerCardsEl = document.getElementById('player-cards')
let playerZoneEl = document.getElementById('player-zone')
let computerZoneEl = document.getElementById('computer-zone')
let computerCardsEl = document.getElementById('computer-cards')

/*----------------------------- Event Listeners -----------------------------*/

document.getElementById('btn').addEventListener('click', handleClick)


/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
  shuffle(deck)
dealPlayer(deck)
dealComp(deck)

}

function handleClick() {
if(playerDeck.length > 0) {
  let randIdx = Math.floor(Math.random()*playerDeck.length)
  let cardPicked = playerDeck.splice(randIdx, 1)[0]
  playerZone.push(cardPicked)
  render(cardPicked)
  
}
if(computerDeck.length > 0) {
  let randIdx = Math.floor(Math.random()*computerDeck.length)
  let computerCard = computerDeck.splice(randIdx, 1)[0]
  computerZone.push(computerCard)
  render2(computerCard)
}

} 
  
function render(cardPicked){
  if (playerZone.length > 0) {  
    playerZoneEl.classList.remove("outline")
    playerZoneEl.classList.remove(cardToRemove)
    playerZoneEl.classList.add(cardPicked)
    console.log(playerZoneEl.classList.value,'1st')
    cardToRemove = cardPicked
  } 
  if (playerZone.length === 13) {  
    playerZoneEl.classList.add("shadow");
    playerCardsEl.classList.remove("shadow");
    console.log(playerZoneEl.classList,'3rd')
  }
  if (playerDeck.length === 0) {  
    playerCardsEl.classList.add("outline");
    playerCardsEl.classList.remove("back-blue");
  }
  
} 
function render2(computerCard) {if(computerZone.length > 0){
  computerZoneEl.classList.remove('outline')
  computerZoneEl.classList.remove(computerCardToRemove)
  computerZoneEl.classList.add(computerCard)
  computerCardToRemove = computerCard
}
        if (computerZone.length === 13) {  
          computerZoneEl.classList.add("shadow");
          computerCardsEl.classList.remove("shadow");
        }   if (computerDeck.length === 0) {  
            computerCardsEl.classList.add("outline");
            computerCardsEl.classList.remove("back-blue");
        }  
  }
  

  function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    } return deck}

    function dealPlayer(deck){
      let newDeck = deck.slice(0, deck.length / 2); 
      playerDeck = newDeck
    }
    
    function dealComp(deck){
      let newCompDeck = deck.slice(deck.length / 2); 
      computerDeck = newCompDeck
    }
    

   