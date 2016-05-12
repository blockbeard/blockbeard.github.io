/**
 * Created by chris_000 on 26/2/2016.
 */
var hotTime = 1;
var coldTime = 2;
var seconds = 0;
var cycles = 10;
var flag;

document.getElementById("hotTime").textContent = ("00" + hotTime).slice(-2);
document.getElementById("coldTime").textContent = ("00" + coldTime).slice(-2);
document.getElementById("clock").textContent = ("00" + hotTime).slice(-2) + ":" + ("00" + seconds).slice(-2);
document.getElementById("cycles").textContent = cycles;

function hotTimeDown() {
    if (hotTime > 1 && flag == "hot") {
        hotTime--;
        document.getElementById("hotTime").textContent = ("00" + hotTime).slice(-2);
        document.getElementById("clock").textContent = ("00" + hotTime).slice(-2) + ":" + ("00" + seconds).slice(-2);
    }
    else if (hotTime > 1) {
        hotTime--;
        document.getElementById("hotTime").textContent = ("00" + hotTime).slice(-2);
    }
}

function hotTimeUp() {
    if (hotTime < 99 && flag == "hot") {
        hotTime++;
        document.getElementById("hotTime").textContent = ("00" + hotTime).slice(-2);
        document.getElementById("clock").textContent = ("00" + hotTime).slice(-2) + ":" + ("00" + seconds).slice(-2);
    }
    else if (hotTime < 99) {
        hotTime++;
        document.getElementById("hotTime").textContent = ("00" + hotTime).slice(-2);
    }
}

function cyclesDown() {
    if (cycles > 1) {
        cycles--;
        document.getElementById("cycles").textContent = cycles;
    }
}

function cyclesUp() {
    if (cycles < 99) {
        cycles++;
        document.getElementById("cycles").textContent = cycles;
    }

}



function coldTimeDown() {
    if (coldTime > 1 && flag == "cold") {
        coldTime--;
        document.getElementById("coldTime").textContent = ("00" + coldTime).slice(-2);
        document.getElementById("clock").textContent = ("00" + coldTime).slice(-2) + ":" + ("00" + seconds).slice(-2);
    }
    else if (coldTime > 1) {
        coldTime--;
        document.getElementById("coldTime").textContent = ("00" + coldTime).slice(-2);
    }
}

function coldTimeUp() {
    if (coldTime < 99 && flag == "cold") {
        coldTime++;
        document.getElementById("coldTime").textContent = ("00" + coldTime).slice(-2);
        document.getElementById("clock").textContent = ("00" + coldTime).slice(-2) + ":" + ("00" + seconds).slice(-2);
    }
    else if (coldTime < 99) {
        coldTime++;
        document.getElementById("coldTime").textContent = ("00" + coldTime).slice(-2);
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
    hotTime = document.getElementById("hotTime").textContent;
    coldTime = document.getElementById("coldTime").textContent;
    seconds = 0;
    if (flag == "hot") {
        document.getElementById("clock").textContent = ("00" + hotTime).slice(-2) + ":" + ("00" + seconds).slice(-2);
    }
    else if (flag == "cold") {
        document.getElementById("clock").textContent = ("00" + coldTime).slice(-2) + ":" + ("00" + seconds).slice(-2);
    }
}

function countdown() {
    if (cycles > 0) {
        if (flag == "hot") {
            document.getElementById("clock").textContent = ("00" + hotTime).slice(-2) + ":" + ("00" + seconds).slice(-2);
            if (hotTime === 0 && seconds === 0) {
                //clearInterval(county);
                var wav = 'http://www.oringz.com/oringz-uploads/sounds-917-communication-channel.mp3';
                var audio = new Audio(wav);
                audio.play();
                //setTimeout(alert("Time for the cold!"), 100);
                cold();
            }
            else if (seconds === 0) {
                seconds = 59;
                hotTime--;
            }
            else {
                seconds--;
            }
        }
        else if (flag == "cold") {
            document.getElementById("clock").textContent = ("00" + coldTime).slice(-2) + ":" + ("00" + seconds).slice(-2);
            if (coldTime === 0 && seconds === 0) {
                //clearInterval(county);
                var wav = 'http://www.oringz.com/oringz-uploads/sounds-917-communication-channel.mp3';
                var audio = new Audio(wav);
                audio.play();
                //setTimeout(alert("Time for some heat!"), 100);
                cycles--;
                document.getElementById("cycles").textContent = cycles;
                hot();
            }
            else if (seconds === 0) {
                seconds = 59;
                coldTime--;
            }
            else {
                seconds--;
            }

        }
    }
    else {var wav = 'http://www.oringz.com/oringz-uploads/sounds-917-communication-channel.mp3';
          var audio = new Audio(wav);
        audio.play();
        setTimeout(alert("Finished!"), 100);
        clearInterval(county);
        }
}

function hot() {
    flag = "hot";
    hotTime = document.getElementById("hotTime").textContent;
    document.body.style.backgroundColor = "darkred";
    document.getElementById("clock").style.color = "red";
    document.getElementById("hotTime").textContent = ("00" + hotTime).slice(-2);
    document.getElementById("clock").textContent = ("00" + hotTime).slice(-2) + ":" + ("00" + seconds).slice(-2);

}

function cold() {
    flag = "cold";
    coldTime = document.getElementById("coldTime").textContent;
    document.body.style.backgroundColor = "darkblue";
    document.getElementById("clock").style.color = "blue";
    document.getElementById("coldTime").textContent = ("00" + coldTime).slice(-2);
    document.getElementById("clock").textContent = ("00" + coldTime).slice(-2) + ":" + ("00" + seconds).slice(-2);
}






