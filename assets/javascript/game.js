// Hangman-type game
// The theme is popular Magic the Gatering cards played in the game's 'Modern' format.


var splashPageOn = true;

document.getElementById("begin").textContent = "Press enter to play!";

// creates array holding all possible words/phrases to be guessed
var allWords = ["path to exile", "serum visions", "scapeshift", "arclight phoenix", "cavern of souls", "tarmogoyf", "dark confidant",
    "scavenging ooze", "thoughtseize", "inquisition of kozilek", "liliana of the veil", "jace, the mind sculptor", "remand",
    "mana leak", "opt", "snapcaster mage", "wurmcoil engine"
];
var beingGuessed = []; // array which will hold all letters of word being guessed
var finishedRound = true; // tells the game if a new word should be picked
var partialWord = "";
var wordBeingGuessed = "";

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
        document.getElementById("instructions").textContent = "Press a letter or the spacebar";
        if (finishedRound) {
            wordBeingGuessed = allWords[Math.floor(Math.random() * allWords.length)]; // generate random number to determine which word to be used
            partialWord = "";
            for (i = 0; i < wordBeingGuessed.length; i++) {
                partialWord = setCharAt(partialWord, i, '-'); // display underscores for each letter not yet guessed
            }
            finishedRound = false;
            Displaypartialword();
            console.log(wordBeingGuessed)
        } else {

            // when user guesses a correct letter, display the letter in place of dash
           
            for (i = 0; i < wordBeingGuessed.length; i++) {
                if (event.key === wordBeingGuessed[i]) {
                    partialWord = setCharAt(partialWord, i, wordBeingGuessed[i]);
                    console.log(partialWord);
                }
            }
            Displaypartialword();

        }
    }

}




//display number of guesses remaining
//display letters already guessed
//display number of user wins

//when user wins or loses alert out if they won or lost

//then restart game