var amigo1Rolou = false;
var amigo2Rolou = false;

var numerosAmigo1 = [];
var numerosAmigo2 = [];

function rolarDadosAmigo(numeroAmigo) {
    document.getElementById('botaoAmigo-' + numeroAmigo).setAttribute('enabled', false);

    if (numeroAmigo == 1) {
        amigo1Rolou = true;

        for (i = 0; i < 6; i++) {
            numerosAmigo1.push(rolarDado());
        }
    } else {
        amigo2Rolou = true;

        for (i = 0; i < 6; i++) {
            numerosAmigo2.push(rolarDado());
        }
    }

    document.getElementById('resultados-' + numeroAmigo).innerText = prepararTextoResultado(numeroAmigo);

    if (amigo1Rolou && amigo2Rolou) {
        checarVencedor();
    }
}

function resetarJogo() {
    amigo1Rolou = false;
    numerosAmigo1 = [];

    amigo2Rolou = false;
    numerosAmigo2 = [];

    document.getElementById('botaoAmigo-1').setAttribute('enabled', true);
    document.getElementById('resultados-1').innerText = "";

    document.getElementById('botaoAmigo-2').setAttribute('enabled', true);
    document.getElementById('resultados-2').innerText = "";
}

function rolarDado() {
    return Math.round((Math.random() * 5) + 1); //Rola o dado para obter resultados entre 1 e 6
}

function checarVencedor() {
    var somaAmigo1 = numerosAmigo1.reduce((n, v) => v + n);
    var somaAmigo2 = numerosAmigo2.reduce((n, v) => v + n);

    document.getElementById('vencedor').style = "";

    if (somaAmigo1 > somaAmigo2) {
        document.getElementById('vencedor').innerText = "Amigo 1 é o vencedor!";
    } else if (somaAmigo1 < somaAmigo2) {
        document.getElementById('vencedor').innerText = "Amigo 2 é o vencedor!";
    } else {
        document.getElementById('vencedor').innerText = "Incrivelmente, um empate...";
    }
}

function prepararTextoResultado(numeroAmigo) {
    var stringResultados = "";
    if (numeroAmigo == 1) {
        stringResultados = numerosAmigo1.join(', ') + ' = ' + numerosAmigo1.reduce((n, v) => v + n).toString();
    } else {
        stringResultados = numerosAmigo2.join(', ') + ' = ' + numerosAmigo2.reduce((n, v) => v + n).toString();
    }

    return stringResultados;
}