// TO DO 
// Make a card holder and a function wich will push the cards on the gameboard and it going to push two of the same card.
// a Suffle function wich will suffle the cards. 
// A Flip function to reavel the cards. 
// A function that will see if the cards are a match. If they are a match display the cards if != match flip the cards back. 
// A timer and a move count.
// an alert message with the amount of time it took and the move count maybe a star rating depending on how many moves. 

// Array tha holds the cards

var gameCards = ['assets/img/cards/cuno.jpg'];


// the game timer
// Maybe set the timer to start after the first move?
//  if (moves === 1) {
//      gameTimer();
//  } Like so. 



var seconds = 0;
var timer = document.getElementById("time");

function gameTimer() {
        setInterval(function() {
            timer.innerHTML = "Time: " + seconds;
            seconds++;
        },1000);
}

gameTimer();