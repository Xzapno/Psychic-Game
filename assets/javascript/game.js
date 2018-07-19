// Create an array containing all letters of the alphabet for the computer to choose from. 

var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// Create variables for tracking wins/losses/guess

var wins = 0;
var losses = 0;
var guesses = 9;
var guessedLetter = [];
var userGuess = null;

// Computer generates random letter 

var randomLetter = alpha[Math.floor(Math.random() * alpha.length)];
console.log("Computer Guess: " + randomLetter);

// Event used to creates variable for user's guess
// Subtract from guess
// Add selected letter to list of guesses
// Check to see if the random letter matches the user's guess

document.onkeypress = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guesses--;
    guessedLetter.push(userGuess);
    document.querySelector('#guessesLeft').innerHTML = "Guesses Left " + guesses;
    document.querySelector('#guesses').innerHTML = "Guesses Letters: " + guessedLetter;
    console.log(userGuess);
    console.log("Guesses left:" + guesses);
    console.log(guessedLetter);

    if (userGuess == randomLetter){
        wins++;
        alert("You win, but you knew that was going to happen... You're Psychic!");
        guesses = 9;
        guessedLetter.length  = 0;
        randomLetter = alpha[Math.floor(Math.random() * alpha.length)];
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        document.querySelector('#guessesLeft').innerHTML = "Guesses Left " + guesses;
        document.querySelector('#guesses').innerHTML = "Guesses Letters:" + guessedLetter + " ";

    } else if(guesses == 0) {
        losses++;
        alert("You Lose, sorry you're no Pcychic.");
        guesses = 9;
        guessedLetter.length  = 0;
        randomLetter = alpha[Math.floor(Math.random() * alpha.length)];
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        document.querySelector('#guessesLeft').innerHTML = "Guesses Left " + guesses;
        document.querySelector('#guesses').innerHTML = "Guesses Letters: " + guessedLetter;
    }
}

