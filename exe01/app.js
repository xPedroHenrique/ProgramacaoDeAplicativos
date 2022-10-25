/**
 *  Instalem biblioteca do prompt e do Math
 *  peçam um intervalo númerico para o user
 *  e gerem um número aleatório utilizando
 *  a função Math.random, até o usuário
 *  pedir para sair
*/

const prompt = require('prompt-sync')();

let opcao = "2";
let limitInf;
let limitSup;
let qtdNum;

do {
    if (opcao == "2") {
        limitInf = parseInt(
            prompt(`Qual o limiteInf do intervalo`
                + ` desejado? >>`));

        limitSup = parseInt(
            prompt(`Qual o limiteSup do intervalo`
                + ` desejado? >>`));

        qtdNum = limitSup - limitInf;
    }

    if (opcao == "1" || opcao == "2") {
        let numAleatorio = Math.floor(Math.random() * qtdNum) + limitInf;

        console.log(
            `\t limitInf: ${limitInf}\n`
            + `\t limitSup: ${limitSup}\n`
            + `\t numAleatorio: ${numAleatorio}\n`
        );
    }

    opcao = prompt(`Digite 1 novo número, 2 novo intervalo ou 0 para sair. >>`);
} while (opcao != "0");

console.log(`Saindo...`);