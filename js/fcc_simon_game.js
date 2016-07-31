var sequence = [],
    strict = false,
    blueButton = document.getElementById("blue"),
    redButton = document.getElementById("red"),
    greenButton = document.getElementById("green"),
    yellowButton = document.getElementById("yellow"),
    countDisplay = document.getElementById("count-number"),
    count = 1,
    playerCount = 0;
countDisplay.innerHTML = 0;
// start the game
function start(){
var colors = ["blue", "green", "yellow", "red"];
    // populate sequence
    for (var i = 0; i < 20; i++){
       sequence.push(colors[Math.floor((Math.random() * 4))]);
    }
    countDisplay.innerText = count;
    console.log(sequence);
    flashSequence();
}
// toggle strict mode
function toggleStrict(){
    strict = !strict;
    if (strict){
        document.getElementById("strict-button").className = "btn btn-lg btn-warning eighties"
    }
    else if (!strict){
        document.getElementById("strict-button").className = "btn btn-lg btn-default eighties"
    }
}

// add 1 to count and flashSequence()
function incrementSequence() {
    count++;
    playerCount = 0;
    flashSequence();
}

// display the sequence and play sounds
function flashSequence(){
    var delay;
    if (count < 6){
        delay = 420;
    }
    else if (count < 14){
        delay = 320;
    }
    else{
        delay = 220;
    }
        for (var i = 0; i < count; i++) {
                setDelay(i)
            }
function setDelay(i){
    setTimeout(function() {

                    blueButton.style.backgroundColor = "";
                    redButton.style.backgroundColor = "";
                    yellowButton.style.backgroundColor = "";
                    greenButton.style.backgroundColor = "";

                    switch (sequence[i]) {
                        case "blue":
                            console.log("blue");
                            blueButton.style.backgroundColor = "lightblue";
                            new Audio('audio/simonSound1.mp3').play();
                            break;
                        case "red":
                            console.log("red");
                            redButton.style.backgroundColor = "lightcoral";
                            new Audio('audio/simonSound2.mp3').play();
                            break;
                        case "yellow":
                            console.log("yellow");
                            yellowButton.style.backgroundColor = "lightyellow";
                            new Audio('audio/simonSound3.mp3').play();
                            break;
                        case "green":
                            console.log("green");
                            greenButton.style.backgroundColor = "lightgreen";
                            new Audio('audio/simonSound4.mp3').play();
                            break;
                        default:
                            console.log("Switch Error");
                    }


                }, delay*i+1);
            }
            setTimeout(function(){
                blueButton.style.backgroundColor = "";
                redButton.style.backgroundColor = "";
                yellowButton.style.backgroundColor = "";
                greenButton.style.backgroundColor = "";
            }, delay*(i+1));
    countDisplay.innerHTML = count;
}

// increment playerCount, take user input pass it to compareSequence()
function userInput(color) {
    playerCount++;
    switch (color) {
        case "blue":
            console.log("blue pressed");
            blueButton.style.backgroundColor = "lightblue";
            new Audio('audio/simonSound1.mp3').play();
            compareSequence(color);
            break;
        case "red":
            console.log("red pressed");
            redButton.style.backgroundColor = "lightcoral";
            new Audio('audio/simonSound2.mp3').play();
            compareSequence(color);
            break;
        case "yellow":
            console.log("yellow pressed");
            yellowButton.style.backgroundColor = "lightyellow";
            new Audio('audio/simonSound3.mp3').play();
            compareSequence(color);
            break;
        case "green":
            console.log("green pressed");
            greenButton.style.backgroundColor = "lightgreen";
            new Audio('audio/simonSound4.mp3').play();
            compareSequence(color);
            break;
        default:
            console.log("Input Error");

    }
    setTimeout(function(){
        blueButton.style.backgroundColor = "";
        redButton.style.backgroundColor = "";
        yellowButton.style.backgroundColor = "";
        greenButton.style.backgroundColor = "";
}, 300);
}

// compare the current playerInput to sequence[playerCount]
function compareSequence(playerInput){
    console.log("playerCount = " + playerCount + " count = " + count);
    if (playerInput === sequence[playerCount -1] && playerCount === count && count === 20){
        new Audio('audio/successBuzzer.mp3').play();
        setTimeout(resetGame, 1000);
    }
    else if (playerInput === sequence[playerCount -1] && playerCount === count) {
        setTimeout(incrementSequence, 1000);
    }else if (playerInput === sequence[playerCount -1]){

    }else if (strict === true){
        new Audio('audio/strictFailBuzzer.mp3').play();
        setTimeout(resetGame, 1000);
    }else{
        new Audio('audio/failBuzzer.mp3').play();
        playerCount = 0;
        countDisplay.innerHTML = "!!";
        setTimeout(flashSequence, 1000);
    }
}

function resetGame(){
    location.reload();
}
/* Sound files
 https://s3.amazonaws.com/freecodecamp/simonSound1.mp3, https://s3.amazonaws.com/freecodecamp/simonSound2.mp3, https://s3.amazonaws.com/freecodecamp/simonSound3.mp3, https://s3.amazonaws.com/freecodecamp/simonSound4.mp3
 */