// Hangman-type game
// The theme is popular Magic the Gatering cards played in the game's 'Modern' format.





// creates array holding all possible words/phrases to be guessed
var allWords = ["Path to Exile",
    "Serum Visions", "Scapeshift",
    "Arclight Phoenix", "Cavern of Souls", "Tarmogoyf", "Dark Confidant",
    "Scavenging Ooze", "Thoughtseize", "Inquisition of Kozilek", "Liliana of the Veil", "Remand",
    "Mana Leak", "Opt", "Snapcaster Mage", "Wurmcoil Engine"
];
var splashPageOn = true;
var beingGuessed = []; // array which will hold all letters of word being guessed
var finishedRound = true; // tells the game if a new word should be picked
var partialWord = "";
var partialWordSpaced = "";
var wordBeingGuessed = "";
var guessesRemaining = 1;
var lettersGuessed = "";
var wins = 0;
var imageName = "";
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function Displaypartialword() {
    document.getElementById("beingGuessed").textContent = partialWord.split('').join(' '); // split/join adds a space inbetween each letter
}
// function which changes a character at a specified index in a string.  

function setCharAt(str, index, chr) {
    //if(index > str.length-1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1); // returns the new string.
}

document.getElementById("header").innerHTML = "<div id = 'begin'>";
document.getElementById("begin").textContent = "Press enter to play";

document.onkeyup = function (event) {
    // clears 'Press any enter get started'

    if (splashPageOn && event.keyCode === 13) { // keycode 13 = enter
        document.getElementById("header").innerHTML = "";
       // document.getElementById("begin").textContent = "";
        splashPageOn = false;

    }
    if (splashPageOn === false) {

        if (finishedRound) {
            // reset variables
            partialWord = "";
            guessesRemaining = 0;
            lettersGuessed = "";
            var randomWordNumber = Math.floor(Math.random() * allWords.length);
            document.getElementById("image").innerHTML = '';
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
            console.log(wordBeingGuessed)
            for (i = 0; i < wordBeingGuessed.length; i++) {
                if (wordBeingGuessed[i] === " ") {
                    partialWord = setCharAt(partialWord, i, '\xa0') // /xa0 is a non-breakable space. this adds a space to partial word        
                } else {
                    partialWord = setCharAt(partialWord, i, '_'); // display underscores for each letter not yet guessed
                }

            }

            // partialWord = setCharAt(partialWord, i, " ");
            finishedRound = false;
            Displaypartialword();

        } else {

            // when user guesses a correct letter, display the letter in place of dash

            for (i = 0; i < wordBeingGuessed.length; i++) {
                if (event.key === wordBeingGuessed[i].toLowerCase() && event.key !== " ") {
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
        // displays text on the left
        document.getElementById("guessesRemaining").textContent = "Guesses remaining: " + guessesRemaining;
        document.getElementById("lettersGuessed").textContent = "Letters Guessed: ";
        document.getElementById("wins").textContent = "Wins: " + wins;
        document.getElementById("actualLettersGuessed").textContent = lettersGuessed;
        document.getElementById("instructions").textContent = "Press a letter to guess if it's in the card name";

        // If user wins
        if (partialWord.replace(/\s/g, '') === wordBeingGuessed.replace(/\s/g, '')) {
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
            document.getElementById("image").innerHTML = '<img class = "cardImage" src="assets/images/' + imageName + '.jpg">';
            finishedRound = true;
        }
        for (i = 0; i < letters.length; i++) {
            if (event.key === letters[i].toLowerCase()) {
                guessesRemaining--;
            }
        }

    }


}



//display number of guesses remaining
//display letters already guessed
//display number of user wins

//when user wins or loses alert out if they won or lost

//then restart game