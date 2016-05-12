/**
 * Created by chris_000 on 01/12/2015.
 */
var focusMinutes = 25;
var breakMinutes = 5;
var seconds = 0;
var flag;

document.getElementById("focusTime").textContent = ("00" + focusMinutes).slice(-2);
document.getElementById("breakTime").textContent = ("00" + breakMinutes).slice(-2);
document.getElementById("clock").textContent = ("00" + focusMinutes).slice(-2) + ":" + ("00" + seconds).slice(-2);

function focusTimeDown() {
    if (focusMinutes > 1 && flag == "work") {
        focusMinutes--;
        document.getElementById("focusTime").textContent = ("00" + focusMinutes).slice(-2);
        document.getElementById("clock").textContent = ("00" + focusMinutes).slice(-2) + ":" + ("00" + seconds).slice(-2);
    }
    else if (focusMinutes > 1) {
        focusMinutes--;
        document.getElementById("focusTime").textContent = ("00" + focusMinutes).slice(-2);
    }
}

function focusTimeUp() {
    if (focusMinutes < 99 && flag == "work") {
        focusMinutes++;
        document.getElementById("focusTime").textContent = ("00" + focusMinutes).slice(-2);
        document.getElementById("clock").textContent = ("00" + focusMinutes).slice(-2) + ":" + ("00" + seconds).slice(-2);
    }
    else if (focusMinutes < 99) {
        focusMinutes++;
        document.getElementById("focusTime").textContent = ("00" + focusMinutes).slice(-2);
    }
}

function breakTimeDown() {
    if (breakMinutes > 1 && flag == "rest") {
        breakMinutes--;
        document.getElementById("breakTime").textContent = ("00" + breakMinutes).slice(-2);
        document.getElementById("clock").textContent = ("00" + breakMinutes).slice(-2) + ":" + ("00" + seconds).slice(-2);
    }
    else if (breakMinutes > 1) {
        breakMinutes--;
        document.getElementById("breakTime").textContent = ("00" + breakMinutes).slice(-2);
    }
}

function breakTimeUp() {
    if (breakMinutes < 99 && flag == "rest") {
        breakMinutes++;
        document.getElementById("breakTime").textContent = ("00" + breakMinutes).slice(-2);
        document.getElementById("clock").textContent = ("00" + breakMinutes).slice(-2) + ":" + ("00" + seconds).slice(-2);
    }
    else if (breakMinutes < 99) {
        breakMinutes++;
        document.getElementById("breakTime").textContent = ("00" + breakMinutes).slice(-2);
    }
}


function start() {
    county = setInterval(countdown, 1000);
}

function pause() {
    clearInterval(county);
}
function reset() {
    clearInterval(county);
    focusMinutes = document.getElementById("focusTime").textContent;
    breakMinutes = document.getElementById("breakTime").textContent;
    seconds = 0;
    if (flag == "work") {
        document.getElementById("clock").textContent = ("00" + focusMinutes).slice(-2) + ":" + ("00" + seconds).slice(-2);
    }
    else if (flag == "break") {
        document.getElementById("clock").textContent = ("00" + breakMinutes).slice(-2) + ":" + ("00" + seconds).slice(-2);
    }
}

function countdown() {

    if (flag == "work") {
        document.getElementById("clock").textContent = ("00" + focusMinutes).slice(-2) + ":" + ("00" + seconds).slice(-2);
        if (focusMinutes === 0 && seconds === 0) {
            clearInterval(county);
            var wav = 'http://www.oringz.com/oringz-uploads/sounds-917-communication-channel.mp3';
            var audio = new Audio(wav);
            audio.play();
            setTimeout(alert("Time to take a break!"), 100);
            rest();
        }
        else if (seconds === 0) {
            seconds = 59;
            focusMinutes--;
        }
        else {
            seconds--;
        }
    }
    else if (flag == "rest") {
        document.getElementById("clock").textContent = ("00" + breakMinutes).slice(-2) + ":" + ("00" + seconds).slice(-2);
        if (breakMinutes === 0 && seconds === 0) {
            clearInterval(county);
            var wav = 'http://www.oringz.com/oringz-uploads/sounds-917-communication-channel.mp3';
            var audio = new Audio(wav);
            audio.play();
            setTimeout(alert("Time to focus!"), 100);
            work();
        }
        else if (seconds === 0) {
            seconds = 59;
            breakMinutes--;
        }
        else {
            seconds--;
        }


    }
}


function work() {
    flag = "work";
    focusMinutes = document.getElementById("focusTime").textContent;
    document.body.style.backgroundColor = "darkred";
    document.getElementById("clock").style.color = "red";
    document.getElementById("focusTime").textContent = ("00" + focusMinutes).slice(-2);
    document.getElementById("clock").textContent = ("00" + focusMinutes).slice(-2) + ":" + ("00" + seconds).slice(-2);

}

function rest() {
    flag = "rest";
    breakMinutes = document.getElementById("breakTime").textContent;
    document.body.style.backgroundColor = "darkgreen";
    document.getElementById("clock").style.color = "green";
    document.getElementById("breakTime").textContent = ("00" + breakMinutes).slice(-2);
    document.getElementById("clock").textContent = ("00" + breakMinutes).slice(-2) + ":" + ("00" + seconds).slice(-2);
}






