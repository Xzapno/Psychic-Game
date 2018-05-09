// Create an array containing all letters of the alphabet for the computer to choose from. 

var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// Create variables for tracking wins/losses/guess

var wins = "0";
var losses = "0";
var guessesLeft = "9";
var guess = "0";

// Create a variable for the computer choice 

var computerChoice = alpha[Math.floor(Math.random() * alpha.length)];

 console.log(computerChoice)

// Create a variable for the user guesses 

document.onkeyup = function(event) {
    var userGuess = (event.key.toLowerCase());
    console.log(userGuess);
}

// Compare the user guess against the computer choice & incriment the win/loss/guesse variables




// document.onkeyup = function() {
//    var userguess = String.fromCharCode(event.keyCode).
//    toLowerCase();
//
//    console.log(userguess);
//
//    var computerGuess = alpha[Math.floor(Math.random()*options.length)];
//
//    console.log(computerGuess);
//
//   if(userguess === computerGuess) {
//       wins++;
//   } else {
//       losses++;
//   }

//    var html = <p>Press Any Letter Key to Begin</p> +
//    "<p>Wins: " + wins + "</p>" +
//    "<p>Loses: " + losees + "</p>" +
//    "<p>Guess Left: "guessesLeft + "</P>"+
//   "<p>Guesses: "guess + "</p>";
//
//    document.querySelector('#game').innerHTML = html;
// }


