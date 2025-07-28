// Create a game where you start with any random game number .  
// Ask the the user to keep guessing  the game number until user guess the correct number .

let value = 20 ;
let userValue = prompt (" Guess the game number ");

while (userValue != value){
   userValue = prompt (" You guess wrong number , Guess again ")
}

 console.log ("You did it ")