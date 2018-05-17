
$(document).ready(function () {
    // Define global variables with default values.
    var guessedNumber = 0;
    var targetNumber = 0;
    var diamond = 0;
    var circle = 0;
    var square = 0;
    var star = 0;
    var tWins = 0;
    var tLosses = 0;

    // Use a function to initialize our game after each round.
    
    function initializeGame() {
        guessedNumber = 0;
        targetNumber = Math.floor(Math.random() * 50) + 20;
        $("#second-number").text(targetNumber);
        operator = "";
        isOperatorChosen = false;
        isCalculated = false;
        //to initiate the game we need to assign a random value to each crystal:
        diamond = Math.floor(Math.random() * 11) + 1;
        console.log(diamond);
        circle = Math.floor(Math.random() * 11) + 1;
        console.log(circle);
        square = Math.floor(Math.random() * 11) + 1;
        console.log(square);
        star = Math.floor(Math.random() * 11) + 1;
        console.log(star);
        //-------------------------------------------------
        $("#diamond").val(diamond);
        $("#square").val(square);
        $("#circle").val(circle);
        $("#star").val(star);
        $("#first-number").text(0);
    }

    //Calling my initializ function to start the game.
    initializeGame();
   
    console.log(targetNumber);
    //-------------------------------------------------
    //Set our win/loss conditions.
    $(".number").on("click", function () {
        if (guessedNumber < targetNumber) {
            guessedNumber += parseInt($(this).val());
            $("#first-number").text(guessedNumber);
        }
        else if (guessedNumber === targetNumber) {
            alert("You win!");
            tWins++;
            $("#wins").text("Total wins: " + tWins);
            initializeGame();
        }
        else {
            alert("You lost! Try again!")
            tLosses++;
            $("#losses").text("Total Losses: " + tLosses);
            initializeGame();
        }
    })
    console.log("first number is " + guessedNumber)
    $("#second-number").text(targetNumber);

});