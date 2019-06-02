// Hangman game
// The theme is popular Magic the Gatering cards played in the game's 'Modern' format.

// Press any key to get started
var splashPageOn = true;
document.getElementById("begin").textContent = "Press any key to play!";

// creates array holding all possible words to be guessed

document.onkeyup = function(event){    
    if (splashPageOn){
        document.getElementById("begin").textContent = "";     
        splashPageOn=false; 
    }
    if (splashPageOn === false){
        // display instructions  
        document.getElementById("txtContent").textContent = "Press a letter or the spacebar";
      }
    

    if(event.keyCode===32){ // keycode 32 equals spacebar
   
    }
    // else{
    //     document.getElementById("txtContent").textContent = "Press a letter or the spacebar";
    // }
}







// create array holding all possible words
// generate random number to determine which word to be used
// display underscores for each letter not yet guessed
// when user guesses a correct letter, display the letter in place of underscore
// take in keys the user presses


//display number of guesses remaining
//display letters already guessed
//display number of user wins

//when user wins or loses alert out if they won or lost

//then restart game