function loadInput(){
        
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            console.log("tekst geladen");
        }
    };
    
    xhttp.open("GET", "input.txt", true);
    xhttp.send();
}

loadInput();
