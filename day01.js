"use strict";

function loadInput(){
        
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log("tekst geladen");
            calibrate(this.responseText);
        }
    };
    xhttp.open("GET", "input2.txt", true);
    xhttp.send();
}

loadInput();


function calibrate(input){
    
    let result = 0;
    let lines = input.split('\n');
    let currentNumber = 0;
    let numbersReached = [];
    
    for (let i = 0; i < lines.length; i++){
        
        currentNumber = Number(lines[i]);
        
        if(currentNumber != NaN){
            
            result += currentNumber;
            
            // check if result is already in numbersReached
            if(numbersReached.indexOf(result) != -1){
                console.log("first frequency reached twice: " + result + " index: " + numbersReached.indexOf(result));
                numbersReached.push(result);
                //return;
            } else {
                numbersReached.push(result);
            }
        }    
    }
    console.log("result = " + result);
}
