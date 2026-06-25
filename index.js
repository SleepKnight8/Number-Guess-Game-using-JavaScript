let randomNumber = Math.floor(Math.random() * 100) + 1;
let currentNumber = 1;
let move_count = 0;
let best_run = Infinity;
let win = false;

function guess(){
    if (win) {
    return;
    }
    move_count++;
    if (currentNumber !== randomNumber){
        if (currentNumber > randomNumber){
            document.getElementById("stat").innerHTML = "Too High!";
        }
        else if (currentNumber < randomNumber){
            document.getElementById("stat").innerHTML = "Too Low!";
        }
        scoring();
    }
    else {
        document.getElementById("stat").innerHTML = "Correct!";
        win = true;
        scoring();
    }
}

function plus(){
    if (currentNumber+1 > 100){
        alert("You can't guess a number more than 100");
        currentNumber = 100;
    }
    else{
        currentNumber++;
        document.getElementById("num_dis").innerHTML = currentNumber;
    }
}

function minus(){
    if (currentNumber-1 < 1){
        alert("You can't guess a number less than one");
        currentNumber = 1;
    }
    else{
        currentNumber--;
        document.getElementById("num_dis").innerHTML = currentNumber;
    }

}

function scoring(){
    if (best_run > move_count && win){
            best_run = move_count;
        }
    document.getElementById("moves").innerHTML = `moves: ${move_count}`;
    document.getElementById("best").innerHTML = `best: ${best_run}`;
}

function restart(){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    currentNumber = 1;
    move_count = 0;
    win = false;
    document.getElementById("moves").innerHTML = `moves: 0`;
    document.getElementById("num_dis").innerHTML = "1";
    document.getElementById("stat").innerHTML = "";
}
