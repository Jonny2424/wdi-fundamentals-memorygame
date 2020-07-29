var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
]

var cardsInPlay = [];
var points = 0;

var checkForMatch = function() {
	
	if (cardsInPlay[0] === cardsInPlay[1]) {
  	alert("You found a match!");
  	points += 1;
  	document.getElementById("points").textContent = points;
} 	else {
  	alert("Sorry, try again.");
};
};

var flipCard = function() {
   var cardId = this.getAttribute('data-id');
   cardsInPlay.push(cards[cardId].rank);
   this.setAttribute('src', cards[cardId].cardImage);

   if (cardsInPlay.length === 2){
   	setTimeout(checkForMatch, 280)
   };

   console.log("User flipped"+" "+ cards[cardId].rank);
   console.log(cards[cardId].cardImage);
   console.log(cards[cardId].suit);

};

var createBoard = function () {
	for (let i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png")
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};

var resetBoard = function () {
	while (cardsInPlay.length > 0) {
		cardsInPlay.pop(0);
	}
	document.getElementById('game-board').innerHTML = "";
	createBoard();
};

createBoard();

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetBoard);