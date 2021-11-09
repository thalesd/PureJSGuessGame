window.addEventListener('load', createRandomNumbers);

var randomNumber;
var numeroDeTentativas = 0;

var numerosUtilizados = [];

function createRandomNumbers(){
    randomNumber = Math.round(Math.random() * 100);

    console.log("random number generated: " + randomNumber);
}

function checkNumberIsInRange(el){
    if(el.value > 100) el.value = 100;
    if(el.value < 0) el.value = 0;

    if(isNaN(parseInt(el.value))) el.value = 0;
}

function checkGuess(){
    var numeroUtilizado = document.getElementById("randomNumberGuess").value;
    if(numeroUtilizado == null || numeroUtilizado == ""){
        return alert("Um número deve ser digitado para a tentativa.");
    }

    numeroDeTentativas++;


    if(!numerosUtilizados.includes(numeroUtilizado)){
        numerosUtilizados.push(numeroUtilizado);
    }

    if(numeroUtilizado == randomNumber){
        alert("Parabéns!\n\nVocê acertou!");
    }
    else {
        var message;
        if(numeroUtilizado > randomNumber) message = "O numero digitado é maior do que o numero sorteado."
        else message = "O numero digitado é menor do que o numero sorteado."

        alert(message);
    }

    updateNumberOfTries();
    updateUsedNumbersDisplay();
}

function updateUsedNumbersDisplay(){
    var element = document.getElementById("usedNumbersDisplay");

    element.innerText = numerosUtilizados.join(', ');
}

function updateNumberOfTries(){
    var element = document.getElementById("numberOfTries");

    element.innerText = numeroDeTentativas.toString();
}