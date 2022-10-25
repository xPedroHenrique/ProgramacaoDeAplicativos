/**
 * Loteria do tio
 * Do 1 ao 25, você escolhe 10 números
 * Ao sortear 5 números, se vocês os tiver escolhido
 * Ganhou!!
 * Iniciar novo projeto na pasta revisão com nome
 * exe02, não esqueça de instalar as dependencias do projeto
 * e iniciar o mesmo com o comando npm init -y 
 */

const prompt = require('prompt-sync')();
let ehValid;
let numeros;

// solicitando 10 números para usuario
do {
    console.log("Digite 10 números, separados por vírgula e sem espaço:");
    numeros = prompt(">> ").split(",");
    ehValid = numerosValidator(numeros, 1, 25, 10);

    if (!ehValid) {
        console.log(
            `Numeros escolhidos não são válidos!` +
            `Evite escolher números repetidos e` +
            `certifique-se que digitou 10 números.`);

    }
} while (!ehValid);

//console.log(numeros[0]+numeros[1]);

// sorteando números da loteria
// [ 1, 2, 3, 2, 5]
let listaSorteados = new Array();
while (listaSorteados.length < 5) {
    let num = Math.floor(Math.random() * 25 + 1).toString();
    if (listaSorteados.indexOf(num) == -1) {
        listaSorteados.push(num);
        console.log(`\t ${listaSorteados.length}º: ${num}`);
    }
}
//console.log(listaSorteados[0]+listaSorteados[1]);

// numeros escolhidos
// listaSorteados
// verificando se usuario ganhou
let qtdAcertos = 0;
let numAcertados = new Array();
for (let i = 0; i < listaSorteados.length; i++) {
    const nS = listaSorteados[i];

    //console.log(nS);

    if (numeros.indexOf(nS) != -1) {
        qtdAcertos++;
        numAcertados.push(nS);
        //console.log(qtdAcertos + " : " + numAcertados);
    }
}

if (qtdAcertos == 0) {
    console.log("Você perdeu!");
} else if (qtdAcertos == 5) {
    console.log("Parabéns você acertou os 5 números sorteados!! " + numAcertados);
} else {
    console.log(`Uau!! Você quase conseguiu!` +
        `\nDos 5 números sorteados você acertou ${qtdAcertos}.` +
        `\n${numAcertados}`);
}


function numerosValidator(array, inferior, superior, qtd) {

    let resultValid1 = array.length == qtd ? true : false;

    let resultValid2 = true;
    for (let i = 0; i < array.length; i++) {
        const n = array[i];
        if (n > superior || n < inferior) {
            resultValid2 = false;
            break;
        }
    }

    let resultValid3 = true;
    for (let i = 0; i < array.length; i++) {
        const ni = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const nj = array[j];
            if (ni == nj) {
                resultValid3 = false;
                break;
            }
        }
    }

    return resultValid1 && resultValid2 && resultValid3;

}