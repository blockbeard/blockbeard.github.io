/**
 * Created by chris_000 on 05/01/2016.
 */

var memory = "0",
    current = "0",
    operator,
    doneCurrent = false;

    document.getElementById("display").textContent = current;


function buttonPress(value) {

    if ((current === "0" && current.indexOf(".")== -1) || doneCurrent == true) {
        current = value;

    }else{
        //currentArr = current.split("");
        //currentArr.push(value);
        //current = currentArr.join("");
        current = current + value.toString();
    }

     document.getElementById("display").textContent = current;
}

function decimal(){
    current=current.toString();
   if (current.indexOf(".")== -1){
       current = current + "."
   }
    document.getElementById("display").textContent = current;
}

function ac() {
    memory = "0";
    current = "0";
    operator = null;
    document.getElementById("display").textContent = current;
}

    function ce() {
    current = "0";
    document.getElementById("display").textContent = current;
    }
 function posNeg(){
     current=current.toString();
     if (current.indexOf("-") == -1) {
         //change sign +/-
         current = "-" + current;
     }
         else if (current.indexOf("-")==0){
          current = current.slice(1);
         }
     document.getElementById("display").textContent = current;
     }


    function equals() {
        //trap div/0
        if (memory === "0"){
        memory = current;
            current = "0";
        }

        if (current == 0 && operator == "4"){
            current = "You can't divide by zero you muppet!"
        }
        //do the math
        else if (operator == "1"){
            current = +memory + +current;
            memory = current;
            doneCurrent = true;
        }
        else if (operator == "2"){
            current = memory - current;
            memory = current;
            doneCurrent = true;
        }
        else if (operator == "3"){
            current = memory * current;
            memory = current;
            doneCurrent = true;
        }
        else if (operator == "4"){
            current = memory / current;
            memory = current;
            doneCurrent = true;
        }
        //trap NaN
        else if (current == NaN){
            current = "Javascript thinks the answer is not a number (something has gone wrong)"
        }
        else {
            current = "Error";
        }
        document.getElementById("display").textContent = current;
    }

    function operation(number) {
        if (memory === "0") {
            memory = current;
            operator = number;
            current = "0"
        }
        else if (operator == "1"){
            current = +memory + +current;
            memory = current;
            doneCurrent = true;
        }
        else if (operator == "2"){
            current = memory - current;
            memory = current;
            doneCurrent = true;
        }
        else if (operator == "3"){
            current = memory * current;
            memory = current;
            doneCurrent = true;
        }
        else if (operator == "4"){
            current = memory / current;
            memory = current;
            doneCurrent = true;
        }
        //trap NaN
        else if (current == NaN){
            current = "Javascript thinks the answer is not a number (something has gone wrong)"
        }
        else {
            current = "Error";
        }
        document.getElementById("display").textContent = current;

    }

