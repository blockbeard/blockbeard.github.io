/**
 * Created by chris_000 on 16/07/2016.
 */
// build a tic tac toe game

var playerChoice,
    compChoice,
    compMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0],
    humanMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0],
    winBackground = "red";
// the main game function. Choice is X or O from an onclick event to start.
function chooseYourWeapon(selected) {
    if (selected == "X") {
        playerChoice = "<img src='img/fcc_tic_tac_toe_x_mark.png' alt='X' style='width:100%; height:100%'>";
        compChoice = "<img src='img/fcc_tic_tac_toe_o_mark.png' alt='O' style='width:100%; height:100%'>";
    } else {
        playerChoice = "<img src='img/fcc_tic_tac_toe_o_mark.png' alt='O' style='width:100%; height:100%'>";
        compChoice = "<img src='img/fcc_tic_tac_toe_x_mark.png' alt='X' style='width:100%; height:100%'>";
    }
}

//take input of player move from onclick event, square is the index that corresponds to the square player clicks
function humanInput(square) {
    //make sure it is a legal move and execute it
    if (compMoves[square] === 0 && humanMoves[square] === 0) {
        humanMoves[square] = 1;
        var thisSquare = "square " + square;
        document.getElementById(thisSquare).innerHTML = playerChoice;
        checkWin(humanMoves);
        compMove();

    }
}

function compInput(square) {
    console.log(square);
    //make sure it is a legal move and execute it
    if (compMoves[square] === 0 && humanMoves[square] === 0) {
        compMoves[square] = 1;
        var thisSquare = "square " + square;
        document.getElementById(thisSquare).innerHTML = compChoice;
        checkWin(compMoves);
    } else {
        console.log("computer made illegal move");
    }
}

function add(a, b) {
    return a + b;
}

//calculate computer's move based on available squares and execute it
function compMove() {

    var potentialMovesArr = [];

    evaluateRow(0, 1, 2);
    evaluateRow(3, 4, 5);
    evaluateRow(6, 7, 8);
    evaluateRow(0, 3, 6);
    evaluateRow(1, 4, 7);
    evaluateRow(2, 5, 8);
    evaluateRow(0, 4, 8);
    evaluateRow(2, 4, 6);

    console.log("potential moves = " + potentialMovesArr);
    /* array flattening function. Not required but I might put it back in if I update the game
     function steamrollArray(arr) {
     // I'm a steamroller, baby
     var newArr = [];
     function flatten(arr) {
     for (var i = 0; i < arr.length; i++) {
     if (Array.isArray(arr[i]) === true) {
     flatten(arr[i]);
     } else {
     newArr.push(arr[i]);
     }
     }
     }
     flatten(arr);
     return newArr;
     }
     */
    function sortFunction(a, b) {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (b[0] < a[0]) ? -1 : 1;
        }
    }



    function evaluateRow(first, second, third) {
        var arrayToEval = [[humanMoves[first], humanMoves[second],  humanMoves[third]], [compMoves[first], compMoves[second], compMoves[third]]],
            evaluated = [arrayToEval[0].reduce(add, 0), arrayToEval[1].reduce(add, 0)],
            squares = [first, second, third],
            allMoves = [compMoves[first] + humanMoves[first], compMoves[second] + humanMoves[second], compMoves[third] + humanMoves[third]],
            moveIndex;
        console.log("Squares = " + first + second + third);
        console.log("array to eval = " + arrayToEval);
        console.log("evaluated = " + evaluated);
        console.log("squares = " + squares + " squares = " + squares);


        if (evaluated[0] === 0 && evaluated[1] === 2) {
            moveIndex = allMoves.indexOf(0);
            potentialMovesArr.push([5, squares[moveIndex]]);
            console.log("if for [0, 2] fired pushing" + [5, squares[moveIndex]]);
        }
        else if (evaluated[0] === 2 && evaluated[1] === 0) {
            moveIndex = allMoves.indexOf(0);
            potentialMovesArr.push([4, squares[moveIndex]]);
            console.log("if for [2, 0] fired pushing" + [4, squares[moveIndex]]);
        }
        else if (evaluated[0] === 0 && evaluated[1] === 1) {
            moveIndex = [allMoves.indexOf(0)];
            potentialMovesArr.push([3, squares[moveIndex]]);
            console.log("if for [0, 1] fired pushing" + [3, squares[moveIndex]]);
        }
        else if (evaluated[0] === 0 && evaluated[1] === 0) {
            potentialMovesArr.push([2, second]);
            console.log("if for [0, 0] fired pushing" + [2, second]);
        }
        else if (evaluated[0] === 1 && evaluated[1] === 0) {
            console.log("1,0 fired");
            moveIndex = [allMoves.indexOf(0)];
            console.log("moveIndex = " + moveIndex);
            potentialMovesArr.push([1, squares[moveIndex]]);
            console.log("squares[moveIndex] = " + squares[moveIndex]);
            console.log("if for [1, 0] fired pushing" + [1, squares[moveIndex]]);
        }
        else if (evaluated[0] === 1 && evaluated[1] === 1) {
            moveIndex = allMoves.indexOf(0);
            potentialMovesArr.push([0, squares[moveIndex]]);
            console.log("if for [1, 1] fired pushing" + [0, squares[moveIndex]]);
        }
        else{
            console.log("no ifs fired");
        }



    }

    potentialMovesArr = potentialMovesArr.sort(sortFunction);
    console.log("sorted potential moves = " + potentialMovesArr);
    compInput(potentialMovesArr[0][1]);

}



// check whether player has won
function checkWin(movesArray) {
    if (movesArray[0] === 1 && movesArray[1] === 1 && movesArray[2] === 1) {
        document.getElementById("square 0").style.backgroundColor = winBackground;
        document.getElementById("square 1").style.backgroundColor = winBackground;
        document.getElementById("square 2").style.backgroundColor = winBackground;
        resetGame();
    }
    else if (movesArray[3] === 1 && movesArray[4] === 1 && movesArray[5] === 1) {
        document.getElementById("square 3").style.backgroundColor = winBackground;
        document.getElementById("square 4").style.backgroundColor = winBackground;
        document.getElementById("square 5").style.backgroundColor = winBackground;
        resetGame();
    }
    else if (movesArray[6] === 1 && movesArray[7] === 1 && movesArray[8] === 1) {
        document.getElementById("square 6").style.backgroundColor = winBackground;
        document.getElementById("square 7").style.backgroundColor = winBackground;
        document.getElementById("square 8").style.backgroundColor = winBackground;
        resetGame();
    }
    else if (movesArray[0] === 1 && movesArray[3] === 1 && movesArray[6] === 1) {
        document.getElementById("square 0").style.backgroundColor = winBackground;
        document.getElementById("square 3").style.backgroundColor = winBackground;
        document.getElementById("square 6").style.backgroundColor = winBackground;
        resetGame();
    }
    else if (movesArray[1] === 1 && movesArray[4] === 1 && movesArray[7] === 1) {
        document.getElementById("square 1").style.backgroundColor = winBackground;
        document.getElementById("square 4").style.backgroundColor = winBackground;
        document.getElementById("square 7").style.backgroundColor = winBackground;
        resetGame();
    }
    else if (movesArray[2] === 1 && movesArray[5] === 1 && movesArray[8] === 1) {
        document.getElementById("square 2").style.backgroundColor = winBackground;
        document.getElementById("square 5").style.backgroundColor = winBackground;
        document.getElementById("square 8").style.backgroundColor = winBackground;
        resetGame();
    }
    else if (movesArray[0] === 1 && movesArray[4] === 1 && movesArray[8] === 1) {
        document.getElementById("square 0").style.backgroundColor = winBackground;
        document.getElementById("square 4").style.backgroundColor = winBackground;
        document.getElementById("square 8").style.backgroundColor = winBackground;
        resetGame();
    }
    else if (movesArray[2] === 1 && movesArray[4] === 1 && movesArray[6] === 1) {
        document.getElementById("square 2").style.backgroundColor = winBackground;
        document.getElementById("square 4").style.backgroundColor = winBackground;
        document.getElementById("square 6").style.backgroundColor = winBackground;
        resetGame();
    }else if (humanMoves.reduce(add, 0) + compMoves.reduce(add, 0) === 9){
        $('#drawModal').modal();
        resetGame();
    } else {
        return false;
    }
}

// reset the game on winning. Reload page? Reload just the game window?
function resetGame() {
    function reload() {
        location.reload()
    }

    setTimeout(reload, 1000);
}
