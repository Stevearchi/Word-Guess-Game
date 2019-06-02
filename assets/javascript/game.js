// Hangman-type game
// The theme is popular Magic the Gatering cards played in the game's 'Modern' format.




//document.getElementById("begin").textContent = "Press enter to play!";

// creates array holding all possible words/phrases to be guessed
var allWords = ["Path to Exile",
// "Serum Visions", "Scapeshift", 
// "Arclight Phoenix", "Cavern of Souls", "Tarmogoyf", "Dark Confidant",
//     "Scavenging Ooze", "Thoughtseize", "Inquisition of Kozilek", "Liliana of the Veil", "Jace, the Mind Scultor", "Remand",
//     "Mana Leak", "Opt", "Snapcaster Mage", "Wurmcoil Engine"
];
var splashPageOn = false; /// Set to true before submitting
var beingGuessed = []; // array which will hold all letters of word being guessed
var finishedRound = true; // tells the game if a new word should be picked
var partialWord = "";
var partialWordSpaced = "";
var wordBeingGuessed = "";
var guessesRemaining = 0;
var lettersGuessed = "";
var wins = 0;
var imageName = "";
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function Displaypartialword() {
    // for (i=0; i<partialWord.length; i++){
    //    partialWordSpaced[i] = &nbsp;

    //    // partialWordSpaced[2*i] = partialWord[i];
    // }
    document.getElementById("beingGuessed").textContent = partialWord.split('').join(' ');
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
            var randomWordNumber = Math.floor(Math.random() * allWords.length);
            wordBeingGuessed = allWords[randomWordNumber]; // generate random number to determine which word to be used
            //This switch statement sets the path for the image corresponding to the random word
            // I think this could be simpler code if I made an object members in this format: cardname: imagename
            switch (randomWordNumber) {
                case 0:
                    imageName = "path-to-exile";
                    break;
                case 1:
                    imageName = "serum-visions";
                    break;
                case 2:
                    imageName = "scapeshift";
                    break;
                case 3:
                    imageName = "arclight-phoenix"
                    break;
                case 4:
                    imageName = "cavern-of-souls"
                    break;
                case 5:
                    imageName = "tarmogoyf";
                    break;
                case 6:
                    imageName = "dark-confidant";
                    break;
                case 7:
                    imageName = "scavenging-ooze";
                    break;
                case 8:
                    imageName = "thoughtseize"
                    break;
                case 9:
                    imageName = "inquisition-of-kozilek";
                    break;
                case 10:
                    imageName = "liliana-of-the-veil";
                    break;
                case 11:
                    imageName = "remand";
                    break;
                case 12:
                    imageName = "mana-leak";
                    break;
                case 13:
                    imageName = "opt";
                    break;
                case 14:
                    imageName = "snapcaster-mage";
                    break;
                case 15:
                    imageName = "wurmcoil-engine"
            }




            guessesRemaining = wordBeingGuessed.length * 3;
            for (i = 0; i < wordBeingGuessed.length; i++) {
                partialWord = setCharAt(partialWord, i, '_'); // display underscores for each letter not yet guessed
            }
            finishedRound = false;
            Displaypartialword();

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
                    lettersGuessed = lettersGuessed.concat(" ", event.key);
                }

            }
        }



        document.getElementById("guessesRemaining").textContent = "Guesses remaining: " + guessesRemaining;
        document.getElementById("lettersGuessed").textContent = "Letters Guessed: ";
        document.getElementById("wins").textContent = "Wins: " + wins;
        document.getElementById("actualLettersGuessed").textContent = lettersGuessed;
        document.getElementById("instructions").textContent = "Press a letter or the spacebar";
    }

    // If user wins
    if (partialWord === wordBeingGuessed) {
        finishedRound = true;
        wins++;
        document.getElementById("image").innerHTML = '<img class = "cardImage" src="assets/images/' + imageName + '.jpg">';
        document.getElementById("win").textContent = "You guessed " + wordBeingGuessed + ".  Great job!";
        document.getElementById("playAgain").textContent = "Press any key to play again.";

    } else { //clears the win/lose text and image
        document.getElementById("win").textContent = "";
        document.getElementById("playAgain").textContent = "";
    }

    if (guessesRemaining <= 0) {
        document.getElementById("win").textContent = "You lost :( The card was: " + wordBeingGuessed;
        document.getElementById("playAgain").textContent = "Press any key to play again.";
        finishedRound = true;
    }
    for (i = 0; i < letters.length; i++) {
        if (event.key === letters[i].toLowerCase()) {
            guessesRemaining--;
        }
    }
    
}




//display number of guesses remaining
//display letters already guessed
//display number of user wins

//when user wins or loses alert out if they won or lost

//then restart game