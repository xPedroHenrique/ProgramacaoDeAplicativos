//inicio do programa
/**
 * Iniciar com login, mostrar menu quando usuario
 * logado com sucesso.
 * 
 * Caso contrario, encerra a aplicação!
 */

let login = require("./model/loginImpl");
let menu = require('./model/menuImpl');

//start application
let ansLogin = login.execute();

if(ansLogin){
    menu.showMenu();
}

console.log("Encerrando a aplicação...");
