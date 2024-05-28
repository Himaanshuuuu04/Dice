// Generate random numbers for the dice
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

// Set the image source for the first dice
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");

// Set the image source for the second dice
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

// Determine the winner and set the heading text accordingly
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
    document.querySelector("h1").innerHTML = "Match draw";
}

