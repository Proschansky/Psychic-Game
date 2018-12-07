var alphabet = "abcdefghijklmnopqrstuvwxyz".split('').join(',')

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var tries = [];
var backgroundColors = ["9ACD32","E8980C","FF0000","4F0CE8","0DE6FF"]

function inArray(any,array){
    for(var i=0;i<array.length;i++){
        if(array[i]==any){return ("true")};
    };
};

document.getElementById("wins").innerHTML = ("Wins: "+ wins);
document.getElementById("losses").innerHTML = ("Losses: "+losses);
document.getElementById("guessesLeft").innerHTML = ("Guesses remaining: " + guessesLeft);

document.onkeypress = function computerGo(event){
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    var userGuess = event.key;
    
    if(userGuess === computerChoice){
        wins++; computerGo;tries=[];
    }

    else if (inArray(userGuess,tries)){
        alert("You guessed that one already!");
        tries = tries.remove(userGuess);
    }

    else if (guessesLeft === 1){
        losses++;guessesLeft = (guessesLeft + 9);computerGo;tries=[];
    }
    
    else guessesLeft--; tries.push(userGuess);
    
    document.getElementById('wins').innerHTML = ("Wins: " + wins);
    document.getElementById('losses').innerHTML = ("Losses: " + losses);
    document.getElementById('guessesLeft').innerHTML = ("Guesses left: "+ guessesLeft);
    document.getElementById('tries').innerHTML = ("Your guesses thus far:" + tries).toUpperCase();
};








