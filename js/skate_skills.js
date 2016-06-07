/**
 * Created by chris_000 on 27/05/2016.
 */
var run,
    forwards = true;

// start the function when the GO! button is pressed
function start() {
    run = true;
    forwards = true;
    skateSkills()
}

// stop the function when STOP! button is pressed
function stop() {
    run = false;
}

// change the set of skills selected
function minimumSkills() {
    document.getElementById("transitionIn").checked = true;
    document.getElementById("transitionOut").checked = true;
    document.getElementById("transitionThreeSixty").checked = true;
    document.getElementById("stopT").checked = true;
    document.getElementById("stopPlow").checked = true;
    document.getElementById("stopLeftPlow").checked = false;
    document.getElementById("stopRightPlow").checked = false;
    document.getElementById("stopHockeyLeft").checked = false;
    document.getElementById("stopHockeyRight").checked = false;
    document.getElementById("stopDerby").checked = false;
    document.getElementById("recoveryLeftKnee").checked = true;
    document.getElementById("recoveryDoubleLeftKnee").checked = true;
    document.getElementById("recoveryRightKnee").checked = true;
    document.getElementById("recoveryDoubleRightKnee").checked = true;
    document.getElementById("recoveryKneeSlide").checked = true;
    document.getElementById("jump").checked = true;
    document.getElementById("hop").checked = true;
    document.getElementById("lateralHop").checked = true;
    document.getElementById("stopTWhistle").checked = true;
    document.getElementById("stopPlowWhistle").checked = true;
    document.getElementById("stopLeftPlowWhistle").checked = false;
    document.getElementById("stopRightPlowWhistle").checked = false;
    document.getElementById("stopHockeyLeftWhistle").checked = false;
    document.getElementById("stopHockeyRightWhistle").checked = false;
    document.getElementById("stopDerbyWhistle").checked = false;
    document.getElementById("minSkills").className = "btn btn-block btn-success";
    document.getElementById("allSkills").className = "btn btn-block btn-primary";
    document.getElementById("customSkills").className = "btn btn-block btn-primary";
}

function allSkills() {
    document.getElementById("transitionIn").checked = true;
    document.getElementById("transitionOut").checked = true;
    document.getElementById("transitionThreeSixty").checked = true;
    document.getElementById("stopT").checked = true;
    document.getElementById("stopPlow").checked = true;
    document.getElementById("stopLeftPlow").checked = true;
    document.getElementById("stopRightPlow").checked = true;
    document.getElementById("stopHockeyLeft").checked = true;
    document.getElementById("stopHockeyRight").checked = true;
    document.getElementById("stopDerby").checked = true;
    document.getElementById("recoveryLeftKnee").checked = true;
    document.getElementById("recoveryDoubleLeftKnee").checked = true;
    document.getElementById("recoveryRightKnee").checked = true;
    document.getElementById("recoveryDoubleRightKnee").checked = true;
    document.getElementById("recoveryKneeSlide").checked = true;
    document.getElementById("jump").checked = true;
    document.getElementById("hop").checked = true;
    document.getElementById("lateralHop").checked = true;
    document.getElementById("stopTWhistle").checked = false;
    document.getElementById("stopPlowWhistle").checked = false;
    document.getElementById("stopLeftPlowWhistle").checked = false;
    document.getElementById("stopRightPlowWhistle").checked = false;
    document.getElementById("stopHockeyLeftWhistle").checked = false;
    document.getElementById("stopHockeyRightWhistle").checked = false;
    document.getElementById("stopDerbyWhistle").checked = false;
    document.getElementById("minSkills").className = "btn btn-block btn-primary";
    document.getElementById("allSkills").className = "btn btn-block btn-success";
    document.getElementById("customSkills").className = "btn btn-block btn-primary";
}

function clearSkills() {
    document.getElementById("transitionIn").checked = false;
    document.getElementById("transitionOut").checked = false;
    document.getElementById("transitionThreeSixty").checked = false;
    document.getElementById("stopT").checked = false;
    document.getElementById("stopPlow").checked = false;
    document.getElementById("stopLeftPlow").checked = false;
    document.getElementById("stopRightPlow").checked = false;
    document.getElementById("stopHockeyLeft").checked = false;
    document.getElementById("stopHockeyRight").checked = false;
    document.getElementById("stopDerby").checked = false;
    document.getElementById("recoveryLeftKnee").checked = false;
    document.getElementById("recoveryDoubleLeftKnee").checked = false;
    document.getElementById("recoveryRightKnee").checked = false;
    document.getElementById("recoveryDoubleRightKnee").checked = false;
    document.getElementById("recoveryKneeSlide").checked = false;
    document.getElementById("jump").checked = false;
    document.getElementById("hop").checked = false;
    document.getElementById("lateralHop").checked = false;
    document.getElementById("stopTWhistle").checked = false;
    document.getElementById("stopPlowWhistle").checked = false;
    document.getElementById("stopLeftPlowWhistle").checked = false;
    document.getElementById("stopRightPlowWhistle").checked = false;
    document.getElementById("stopHockeyLeftWhistle").checked = false;
    document.getElementById("stopHockeyRightWhistle").checked = false;
    document.getElementById("stopDerbyWhistle").checked = false;
    document.getElementById("minSkills").className = "btn btn-block btn-primary";
    document.getElementById("allSkills").className = "btn btn-block btn-primary";
    document.getElementById("customSkills").className = "btn btn-block btn-primary";
}

function customSkills() {
    document.getElementById("minSkills").className = "btn btn-block btn-primary";
    document.getElementById("allSkills").className = "btn btn-block btn-primary";
    document.getElementById("customSkills").className = "btn btn-block btn-success";

}
// the main function that does the thing
function skateSkills() {
    var //setTime = 300000,
        //restTime = 30000,
        timeToNext = (1000 * parseInt(document.getElementById("timeToNextInput").value, 10)),
        stopTime = 1000 + (1000 * parseInt(document.getElementById("stopTimeInput").value, 10)),
        transitionIn = document.getElementById("transitionIn").checked,
        transitionOut = document.getElementById("transitionOut").checked,
        transitionThreeSixty = document.getElementById("transitionThreeSixty").checked,
        stopT = document.getElementById("stopT").checked,
        stopPlow = document.getElementById("stopPlow").checked,
        stopLeftPlow = document.getElementById("stopLeftPlow").checked,
        stopRightPlow = document.getElementById("stopRightPlow").checked,
        stopHockeyLeft = document.getElementById("stopHockeyLeft").checked,
        stopHockeyRight = document.getElementById("stopHockeyRight").checked,
        stopDerby = document.getElementById("stopDerby").checked,
        recoveryLeftKnee = document.getElementById("recoveryLeftKnee").checked,
        recoveryDoubleLeftKnee = document.getElementById("recoveryDoubleLeftKnee").checked,
        recoveryRightKnee = document.getElementById("recoveryRightKnee").checked,
        recoveryDoubleRightKnee = document.getElementById("recoveryDoubleRightKnee").checked,
        recoveryKneeSlide = document.getElementById("recoveryKneeSlide").checked,
        jump = document.getElementById("jump").checked,
        hop = document.getElementById("hop").checked,
        lateralHop = document.getElementById("lateralHop").checked,
        skillArray = [transitionIn,
            transitionOut,
            transitionThreeSixty,
            stopT,
            stopPlow,
            stopLeftPlow,
            stopRightPlow,
            stopHockeyLeft,
            stopHockeyRight,
            stopDerby,
            recoveryLeftKnee,
            recoveryDoubleLeftKnee,
            recoveryRightKnee,
            recoveryDoubleRightKnee,
            recoveryKneeSlide,
            jump,
            hop,
            lateralHop
        ],
        stopTWhistle = document.getElementById("stopTWhistle").checked,
        stopPlowWhistle = document.getElementById("stopPlowWhistle").checked,
        stopLeftPlowWhistle = document.getElementById("stopLeftPlowWhistle").checked,
        stopRightPlowWhistle = document.getElementById("stopRightPlowWhistle").checked,
        stopHockeyLeftWhistle = document.getElementById("stopHockeyLeftWhistle").checked,
        stopHockeyRightWhistle = document.getElementById("stopHockeyRightWhistle").checked,
        stopDerbyWhistle = document.getElementById("stopDerbyWhistle").checked,

        practiceArray,
        nextSkill,
        funcArray = [transitionInFunc,
            transitionOutFunc,
            transitionThreeSixtyFunc,
            stopTFunc,
            stopPlowFunc,
            stopLeftPlowFunc,
            stopRightPlowFunc,
            stopHockeyLeftFunc,
            stopHockeyRightFunc,
            stopDerbyFunc,
            recoveryLeftKneeFunc,
            recoveryDoubleLeftKneeFunc,
            recoveryRightKneeFunc,
            recoveryDoubleRightKneeFunc,
            recoveryKneeSlideFunc,
            jumpFunc,
            hopFunc,
            lateralHopFunc],
        transitionArray = [transitionInFunc, transitionOutFunc],
        practiceTransitionArray;


    practiceArray = funcArray.filter(function checked(elem, index) {
        return skillArray[index];
    });

    practiceTransitionArray = transitionArray.filter(function checkedTransition(elem, index) {
        return skillArray[index];
    });

    goCheck();

    function goCheck() {
        if (run) {
            pickSkill();
        }
    }

    console.log("Skill array = " + skillArray);
    console.log("func array = " + funcArray);
    console.log("practice array = " + practiceArray);
    console.log("practice transition array = " + practiceTransitionArray);

// whistle sound effect for stops
    function whistle() {
        var whistleAudio = new Audio('audio/whistle.mp3');
        whistleAudio.play();

    }

//function to determine a random time for the next Skill
    function nextTime() {
        
    }


//functions to call for a specific skill

    function transitionInFunc() {
        var transitionInAudio = new Audio('audio/transitionIn.mp3');
        transitionInAudio.play();
        forwards = !forwards;
        nextTime();
        setTimeout(goCheck, timeToNext);
    }

    function transitionOutFunc() {
        var transitionOutAudio = new Audio('audio/transitionOut.mp3');
        transitionOutAudio.play();
        forwards = !forwards;
        nextTime();
        setTimeout(goCheck, timeToNext);
    }

    function transitionThreeSixtyFunc() {
        var transitionThreeSixtyAudio = new Audio('audio/transitionThreeSixty.mp3');
        transitionThreeSixtyAudio.play();
        nextTime();
        setTimeout(goCheck, timeToNext);

    }

    function stopTFunc() {
        var stopTAudio = new Audio('audio/stopT.mp3');
        stopTAudio.play();
        if (stopTWhistle) {
            setTimeout(whistle, 1000);
            setTimeout(whistle, stopTime);
            nextTime();
            setTimeout(goCheck, timeToNext + stopTime);
        } else {
            nextTime();
            setTimeout(goCheck, timeToNext);
        }
    }

    function stopPlowFunc() {
        var stopPlowAudio = new Audio('audio/stopPlow.mp3');
        stopPlowAudio.play();
        if (stopPlowWhistle) {
            setTimeout(whistle, 1000);
            setTimeout(whistle, stopTime);
            nextTime();
            setTimeout(goCheck, timeToNext + stopTime);
        } else {
            nextTime();
            setTimeout(goCheck, timeToNext);
        }
    }

    function stopLeftPlowFunc() {
        var stopLeftPlowAudio = new Audio('audio/stopLeftPlow.mp3');
        stopLeftPlowAudio.play();
        if (stopLeftPlowWhistle) {
            setTimeout(whistle, 1000);
            setTimeout(whistle, stopTime);
            nextTime();
            setTimeout(goCheck, timeToNext + stopTime);
        } else {
            nextTime();
            setTimeout(goCheck, timeToNext);
        }
    }

    function stopRightPlowFunc() {
        var stopLeftPlowAudio = new Audio('audio/stopLeftPlow.mp3');
        stopLeftPlowAudio.play();
        if (stopRightPlowWhistle) {
            setTimeout(whistle, 1000);
            setTimeout(whistle, stopTime);
            nextTime();
            setTimeout(goCheck, timeToNext + stopTime);
        } else {
            nextTime();
            setTimeout(goCheck, timeToNext);
        }
    }

    function stopHockeyLeftFunc() {
        var stopHockeyLeftAudio = new Audio('audio/stopHockeyLeft.mp3');
        stopHockeyLeftAudio.play();
        if (stopHockeyLeftWhistle) {
            setTimeout(whistle, 1000);
            setTimeout(whistle, stopTime);
            nextTime();
            setTimeout(goCheck, timeToNext + stopTime);
        } else {
            nextTime();
            setTimeout(goCheck, timeToNext);
        }
    }

    function stopHockeyRightFunc() {
        var stopHockeyRightAudio = new Audio('audio/stopHockeyRight.mp3');
        stopHockeyRightAudio.play();
        if (stopHockeyRightWhistle) {
            setTimeout(whistle, 1000);
            setTimeout(whistle, stopTime);
            nextTime();
            setTimeout(goCheck, timeToNext + stopTime);
        } else {
            nextTime();
            setTimeout(goCheck, timeToNext);
        }
    }

    function stopDerbyFunc() {
        var stopDerbyAudio = new Audio('audio/stopDerby.mp3');
        stopDerbyAudio.play();
        if (stopDerbyWhistle) {
            setTimeout(whistle, 1000);
            setTimeout(whistle, stopTime);
            nextTime();
            setTimeout(goCheck, timeToNext + stopTime);
        } else {
            nextTime();
            setTimeout(goCheck, timeToNext);
        }
    }


    function recoveryLeftKneeFunc() {
        var recoveryLeftKneeAudio = new Audio('audio/recoveryLeftKnee.mp3');
        recoveryLeftKneeAudio.play();
        nextTime();
        setTimeout(goCheck, timeToNext);

    }

    function recoveryDoubleLeftKneeFunc() {
        var recoveryDoubleLeftKneeAudio = new Audio('audio/recoveryDoubleLeftKnee.mp3');
        recoveryDoubleLeftKneeAudio.play();
        nextTime();
        setTimeout(goCheck, timeToNext);

    }

    function recoveryRightKneeFunc() {
        var recoveryRightKneeAudio = new Audio('audio/recoveryRightKnee.mp3');
        recoveryRightKneeAudio.play();
        nextTime();
        setTimeout(goCheck, timeToNext);

    }

    function recoveryDoubleRightKneeFunc() {
        var recoveryDoubleRightKneeAudio = new Audio('audio/recoveryDoubleRightKnee.mp3');
        recoveryDoubleRightKneeAudio.play();
        nextTime();
        setTimeout(goCheck, timeToNext);

    }

    function recoveryKneeSlideFunc() {
        var recoveryKneeSlideAudio = new Audio('audio/recoveryKneeSlide.mp3');
        recoveryKneeSlideAudio.play();
        nextTime();
        setTimeout(goCheck, timeToNext);

    }

    function jumpFunc() {
        var jumpAudio = new Audio('audio/jump.mp3');
        jumpAudio.play();
        nextTime();
        setTimeout(goCheck, timeToNext);

    }

    function hopFunc() {
        var hopAudio = new Audio('audio/hop.mp3');
        hopAudio.play();
        nextTime();
        setTimeout(goCheck, timeToNext);

    }

    function lateralHopFunc() {
        var lateralHopAudio = new Audio('audio/lateralHop.mp3');
        lateralHopAudio.play();
        nextTime();
        setTimeout(goCheck, timeToNext);

    }


    // picking what Skill to do next
    function pickSkill() {
        if (!forwards) {
            nextSkill = practiceTransitionArray[Math.floor((Math.random() * practiceTransitionArray.length))];
            nextSkill();
        } else {
            nextSkill = practiceArray[Math.floor((Math.random() * practiceArray.length))];
            nextSkill();

        }
    }


}


