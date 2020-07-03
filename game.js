
var buttonColours = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;



//** Add event listener **//

$(document).keydown(function () {
    if (!started) {
        $('#level-title').text('Level ' + level);
        nextSequence();
        started = true;

    }
})

$(".btn").on("click", function () {

    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);

});


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        $('h1').text("Game Over, Press Any Key to Restart");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $('body').removeClass("game-over");
        }, 200)
        startOver();

    }

}

function nextSequence() {
    userClickedPattern=[];
    level++;
    $('#level-title').text('Level ' + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    var randomAnimation = $('#' + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
};

function animatePress(parameter_currentColor) {
    $("#" + parameter_currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + parameter_currentColor).removeClass("pressed");
    }, 100);
}

function playSound(parameter_name) { // we got away from switch or if else statement.
    var audio = new Audio('sounds/' + parameter_name + '.mp3');
    audio.play();
}
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}







/*** my second way for sound ***/


// function makeSound(parameter) {
//     switch (parameter) {
//         case 'red':
//             var audio = new Audio("sounds/red.mp3");
//             audio.play();
//             break;
//         case 'blue':
//             var audio = new Audio("sounds/blue.mp3");
//             audio.play();
//             break;
//         case 'yellow':
//             var audio = new Audio("sounds/yellow.mp3");
//             audio.play();
//             break;
//         case 'green':
//             var audio = new Audio("sounds/green.mp3");
//             audio.play();
//             break;
//     }
// }