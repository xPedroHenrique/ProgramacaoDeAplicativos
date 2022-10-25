//imports
const prompt = require("prompt-sync")();
const FormUser = require("./formUserImpl").FormUser;
const UserImpl = require("./userImpl");


//função showMenu
function showMenu() {

    let opMenu = 0;

    while (opMenu != 5) {
        console.log(
            `-----------------------------------\n` +
            `-               Menu              -\n` +
            `-----------------------------------\n` +
            `    1 - Cadastrar Usuário          \n` +
            `    2 - Consultar Usuário          \n` +
            `    3 - Atualizar Usuário          \n` +
            `    4 - Remover Usuário            \n` +
            `    5 - Sair                       \n` +
            `Qual opção você deseja?            `
        );

        opMenu = +prompt(">> ");
        //verificar tipo da variável
        //console.log(typeof(opMenu)); 
        //console.log(opMenu);

        switch (opMenu) {
            case 1: { //cadastro de usuario
                createNewUser();
            }
                break;
            case 2: { //consulta de usuario

            }
                break;
            case 3: { //atualizar usuario

            }
                break;
            case 4: { //remover usuario

            }
                break;
            case 5: //saída
                break;
            default:
                console.log("Opção escolhida é inválida!");
                break;
        }
    }
}


//função createNewUser
function createNewUser() {

    //pedir login e senha a serem cadastrados
    let login = prompt("Usuario: ");
    let password = prompt("Senha: ");
    //cria form
    let form = new FormUser(login, password);
    //tenta criar novo usuario
    let cadOk = UserImpl.tryCreate(form);

    if(cadOk == false){
        console.log("Erro ao tentar cadastrar novo usuário! Por favor escolha outro nome de usuário, ou contate o suporte!");
    }

}
//função readUser
function readUser() {

}
//função updateUser 
function updateUser() {

}
//função deleteUser
function deleteUser() {

}
//exports
module.exports = {
    showMenu
}