/**
 * Requisitos do login
 * 1 - pedir informações de usuario e senha
 * 2 - valida informações de usuario e senha
 * 3 - Precisa de usuario
 * 4 - Informações de usuario e senha armazenadas
 * 5 - Opcão de redefinir senha
 * 6 - Aviso de informações inválidas
 */

//imports
const prompt = require('prompt-sync')();
const UserImpl = require('./userImpl');

// definição usuario master
let userMaster = "admin";
let passwordMaster = "admin";

function execute() {

    // variáveis de controle
    let isLoginOk = false;
    let user;
    let password;
    let counter = 0;
    const attempts = 3

    do {
        user = prompt("usuario: ");
        password = prompt("senha: ");
        counter++;

        //se igual usuario master ou se um usuario cadastrado
        let isValidUser = UserImpl.valid(user, password);
        let isUserMaster = user == userMaster && password == passwordMaster;
        if (isValidUser || isUserMaster) {
            isLoginOk = true;
        } else {
            console.log("Dados de usuário e senha inválidos!");
        }

    } while (!isLoginOk && counter < attempts);
    
    if (isLoginOk) {
        console.log(`Bem vindo, ${user}!`);
    } else {
        console.log("Tentativas de login excedidas!");
    }

    return isLoginOk;
}

module.exports ={
    execute
}



