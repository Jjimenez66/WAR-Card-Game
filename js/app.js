/*-------------------------------- Constants ---------------------------*/



/*-------------------------------- Variables(state) ----------------------*/
let deck, winner, loser, tie



/*------------------------ Cached Element References --------------------*/



/*----------------------------- Event Listeners -------------------------*/



/*-------------------------------- Functions ----------------------------*/






// Declare deck variables
let deck1 = []
let deck2 = []
let deck3 = []
let cardToRemove
// Cached element references
let deck1El = document.getElementById('deck-1')
let deck2El = document.getElementById('deck-2')

// Event listeners
document.getElementById('btn').addEventListener('click', handleClick)
// Functions
init()
// Initialize deck 1 with array of 52 cards 
function init() {
  deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
}
// Function to handle a button click:
    // Randomly select number from total cards remaining
    // Assign card with the random index to a variable
    // Add card picked to deck 2
    // Pass card picked to render function to display
    function handleClick() {
    if(deck1.length >0) {
      let randIdx = Math.floor(Math.random()*deck1.length)

      let cardPicked = deck1.splice(randIdx, 1)[0]

      deck2.push(cardPicked)
      
      render(cardPicked)
    }
    
    
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
// Function to render deck state
	 // Remove outline class when first card is picked
   // Removes previous picked card from deck 2 class list
   // Add current card picked to deck 2 element
	 // Adjust shadow when deck gets above/below halfway full
	 // Remove card back color and add outline when last card is picked
