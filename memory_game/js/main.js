var cards = ["Queen!", "Queen!", "King!", "King!"];
var cardsInPlay = [];
var cardOne = cards[0];

cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	console.log("you have selected two cards")
}
else if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!")
} 
else (cardsInPlay[0] !== cardsInPlay[1]) 
	alert("Sorry, try again!")

