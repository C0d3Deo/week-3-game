var letters = [];

	for (i=97;i<=122;i++){
    letters[letters.length] = String.fromCharCode(i);
    letters.push.char(i);
	}

for (var j = 0; j < letters.length; j++){
	console.log(letters[j]);
}

var computerGuess = letters[Math.floor(Math.random() * letters.length)];
	console.log(computerGuess)
// var userInput = 