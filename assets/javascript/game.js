var letters = [];
var guesses = "";
var wins = 1;
var losses = 1;
var computerGuess = "";
var pastGuess = [];

//Create alphabet array based on unicode reference
for (i=97;i<=122;i++){
	letters[letters.length] = String.fromCharCode(i);
}

// for (var j = 0; j < letters.length; j++){
	
// 	console.log(letters[j]);
// }
function game (){
	// alert("Guess the letter your 'client' is thinking of to establish Psychic Connection")
	guesses = 9;
	var guessCntr = document.getElementById('guessCntr');
				guessCntr.innerHTML = guesses;
				// guesses.push(guesses);
	var guess = (function guess() {
		computerGuess = 
			letters[Math.floor(Math.random() * letters.length)];
		console.log(computerGuess);
	})();
// debugger;
	document.onkeyup = function(event) {
		if (event.which !== 0 && !event.ctrlKey && !event.metaKey && !event.altKey) {
			var userInput = String.fromCharCode(event.keyCode).toLowerCase();
			var pastInputs = document.getElementById('pastInputs');

				if (userInput == computerGuess){
					var audio = new Audio("../week-3-game/assets/images/Oh-Yeah.mp3");
					audio.play();
					alert("WINNAH!!!");
					var winCt = document.getElementById('winCt');
					winCt.innerHTML = wins++;
					pastGuess = "";
					pastInputs;
	            	pastInputs.innerHTML = pastGuess;		
					game();
				}else if (userInput != computerGuess && guesses > 0) {
					guessCntr;
		//For some reason, the user technically has 10 chances instead of 9 because the first keypress does not actual bring down the counter, Did not have time to investigate further.
					guessCntr.innerHTML = guesses--;
		            pastGuess += userInput + ", ";
		            pastInputs;
	            	pastInputs.innerHTML = pastGuess;
		              			 
				}else if (guesses == 0) {
					guessCntr;
					guessCntr.innerHTML = guesses--;
					pastGuess = "";
					pastInputs;
	            	pastInputs.innerHTML = pastGuess;
	            	//the popups seem to be superseding the commands above it. I could not figure out how to force execution order
						alert("You lose!");
						confirm("Try again, chief?");
					if (true) {
					var lossCt = document.getElementById('lossCt')
					lossCt.innerHTML = losses++;
					game();
					}
				}
			}}
}
game();



// document.onkeyup = function(event) {
        // reduce the number of guesses left by one

        // get the user input as a lower case letter

        // add the guess to the an array of guessed letters

        // update html for guesses made and number of guesses

        // if there are still guesses left:
            // check for a match
                // if matching, update win count and html
                // reset the game

        // if there are no guesses left

            // update loss count and html
            // reset the game
    // };