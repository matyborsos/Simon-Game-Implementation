var gamePattern = [];
var userClickedPattern  = [];
var level = 1;

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randomNumber = Math.floor((Math.random() * 10) % 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);       
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
    $("h1").text("Level " + level);
    level++;
    console.log(gamePattern);
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
}

var userChosenColour;

$("#green").on("click", function(event) {
    userChosenColour = "green";
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    animatePress(userChosenColour);
    setTimeout(function () {
        $("#" + userChosenColour).removeClass("pressed");
    }, 100);
    if( userClickedPattern.length === level - 1)
        checkAnswer(level);
})

$("#blue").on("click", function(event) {
    userChosenColour = "blue";
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    animatePress(userChosenColour);
    setTimeout(function () {
        $("#" + userChosenColour).removeClass("pressed");
    }, 100);
    if( userClickedPattern.length === level - 1)
        checkAnswer(level);
})

$("#red").on("click", function(event) {
    userChosenColour = "red";
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    animatePress(userChosenColour);
    setTimeout(function () {
        $("#" + userChosenColour).removeClass("pressed");
    }, 100);
    if( userClickedPattern.length === level - 1)
        checkAnswer(level);
})

$("#yellow").on("click", function(event) {
    userChosenColour = "yellow";
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    animatePress(userChosenColour);
    setTimeout(function () {
        $("#" + userChosenColour).removeClass("pressed");
    }, 100);
    if( userClickedPattern.length === level - 1)
        checkAnswer(level);
})

document.addEventListener("click", function(event) {
switch(userChosenColour){
    case "green":
        var audio = new Audio('./sounds/green.mp3');
        audio.play();
    break;
    case "blue":
        var audio = new Audio('./sounds/blue.mp3');
        audio.play();
    break;
    case "red":
        var audio = new Audio('./sounds/red.mp3');
        audio.play();
    break;
    case "yellow":
        var audio = new Audio('./sounds/yellow.mp3');
        audio.play();
    break;
}
})

document.addEventListener("keypress", nextSequence);

function checkAnswer(currentLevel) {
    console.log(userClickedPattern);
    console.log(gamePattern);
    var i;
    var bad = 0;
    for( i = 0; i < currentLevel-1; i++)
        if ( userClickedPattern[i] != gamePattern[i] ){
            bad = 1;
            console.log("fail");
            var audio = new Audio('./sounds/wrong.mp3');
            audio.play();
            $("h1").text("Game Over, Press Any Key to Restart");
            $("body").addClass("game-over");
            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 300);
            startOver();
        }
        else
            console.log("success");
    userClickedPattern = [];
    if( bad === 0 )
        nextSequence();
}

function startOver() {
    level = 1;
    gamePattern = [];
}