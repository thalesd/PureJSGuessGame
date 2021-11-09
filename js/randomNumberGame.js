document.onload();

var randomNumber = null;
var numeroDeTentativas = 0;

var numerosUtilizados = [];

function createRandomNumbers(){
    randomNumber = Math.random() * 100;
}

function checkGuess(){
    numeroDeTentativas++;

    var numeroUtilizado = document.getElementById("randomNumberGuess").value;

    if(!numerosUtilizados.includes(numeroUtilizado)){
        numerosUtilizados.push(numeroUtilizado);
    }

    if(numeroUtilizado == randomNumber){
        alert("Parabéns!\n\nVocê acertou!");
    }
}