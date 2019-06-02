// Hangman-type game
// The theme is popular Magic the Gatering cards played in the game's 'Modern' format.




//document.getElementById("begin").textContent = "Press enter to play!";

// creates array holding all possible words/phrases to be guessed
var allWords = ["Path to Exile", "Serum Visions", "Scapeshift", "Arclight Phoenix", "Cavern of Souls", "Tarmogoyf", "Dark Confidant",
    "Scavenging Ooze", "Thoughtseize", "Inquisition of Kozilek", "Liliana of the Veil", "Jace, the Mind Scultor", "Remand",
    "Mana Leak", "Opt", "Snapcaster Mage", "Wurmcoil Engine"];
var splashPageOn = false; /// Set to true before submitting
var beingGuessed = []; // array which will hold all letters of word being guessed
var finishedRound = true; // tells the game if a new word should be picked
var partialWord = "";
var wordBeingGuessed = "";
var guessesRemaining = 0;
var lettersGuessed = "";
var wins = 0;
var letters = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

function Displaypartialword() {
    document.getElementById("beingGuessed").textContent = partialWord;
}
// function which changes a character at a specified index in a string.  
function setCharAt(str, index, chr) {
    //if(index > str.length-1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1); // returns the new string.
}
document.onkeyup = function (event) {
    // clears 'Press any en)ter get started'

    if (splashPageOn && event.keyCode === 13) { // keycode 13 = enter
        document.getElementById("begin").textContent = "";
        splashPageOn = false;
    }
    
    if (splashPageOn === false) {
        // display instructions  
       
   
        if (finishedRound) {
            // reset variables
            partialWord = "";
            guessesRemaining = 0;
            lettersGuessed = "";
            wordBeingGuessed = allWords[Math.floor(Math.random() * allWords.length)]; // generate random number to determine which word to be used
            guessesRemaining = wordBeingGuessed.length*3;
            for (i = 0; i < wordBeingGuessed.length; i++) {
                partialWord = setCharAt(partialWord, i, '-'); // display underscores for each letter not yet guessed
            }
            finishedRound = false;
            Displaypartialword();
            console.log(wordBeingGuessed)
        } else {

            // when user guesses a correct letter, display the letter in place of dash

            for (i = 0; i < wordBeingGuessed.length; i++) {
                if (event.key === wordBeingGuessed[i].toLowerCase()) {
                    partialWord = setCharAt(partialWord, i, wordBeingGuessed[i]);
                }
            }
            Displaypartialword();
            
            for (i = 0; i < letters.length; i++) {
                if (event.key === letters[i].toLocaleLowerCase()) {
                    lettersGuessed = lettersGuessed.concat(", ", event.key);
                }
    
            }
        }

        

        document.getElementById("guessesRemaining").textContent = "Guesses remaining: " + guessesRemaining;
        document.getElementById("lettersGuessed").textContent = "Letters Guessed: ";
        document.getElementById("wins").textContent = "Wins: " + wins;
        document.getElementById("actualLettersGuessed").textContent = lettersGuessed;
        document.getElementById("instructions").textContent = "Press a letter or the spacebar"; 
    }
    
    if (partialWord === wordBeingGuessed){
        finishedRound = true;
        wins++;
        document.getElementById("win").textContent = "You guessed " + wordBeingGuessed + ".  Great job!";
        document.getElementById("playAgain").textContent = "Press any key to play again.";
                                                    
        //alert("You guessed " + wordBeingGuessed + " Great job!")
    } else{
        document.getElementById("win").textContent = "";
        document.getElementById("playAgain").textContent = "";
    }

    
    if (guessesRemaining <= 0){
        document.getElementById("win").textContent = "You lost :( The card was: " + wordBeingGuessed;
        document.getElementById("playAgain").textContent = "Press any key to play again.";
        finishedRound = true;
    }
    guessesRemaining--;
}




//display number of guesses remaining
//display letters already guessed
//display number of user wins

//when user wins or loses alert out if they won or lost

//then restart game