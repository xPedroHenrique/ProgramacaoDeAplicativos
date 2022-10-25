/**
 * Classe usuario
 * atributos
 * 1 - Nome
 **** 2 - login
 **** 3 - senha
 * 4 - numero telefone
 * 5 - e-mail
 * 6 - cpf
 * 7 - endereço
 * 8 - estado civil
 * 9 - data nascimento
 **** 10 - lista de usuarios ativos
 * 
 * métodos
 * 1 - cadastrar novo usuario
 * 2 - deletar usuario
 * 3 - editar usuario
 * 4 - trocar senha
 * 5 - consultar usuario
 * 6 - validar dados de acesso
 */

const fs = require('fs');
const Person = require('./personImpl.js').Person;
const FormUser = require('./formUserImpl').FormUser;

let listUsers = new Array();

class User extends Person {
    constructor(login, password, name = "", phone = "", email = "", cpf = "", adress = "", maritalState = "", birthDate = "") {
        super(name, phone, email, cpf, adress, maritalState, birthDate);
        this.login = login;
        this.password = password;
    }

    toString() {
        return `${this.login};${this.password}`;
    }
}

function valid(login, password) {
    if (listUsers.length <= 0) {
        load();
    }
    let isUserValid = false;
    for (let i = 0; i < listUsers.length; i++) {
        const element = listUsers[i];
        if (element.login == login && element.password == password) {
            isUserValid = true;
        }
    }
    return isUserValid;
}

function load() {
    let arq = fs.readFileSync("../resources/user.txt", "utf8");
    let arrayArq = arq.split('\r\n');
    console.log(arrayArq);

    arrayArq.forEach(line => {
        let data = line.split(';');
        console.log(data);

        let user = new User(data[0], data[1]);
        listUsers.push(user);
    });

    console.log(listUsers);
}

function tryCreate(formUser) {
    //verifica se lista tem usuario e tentou carregar
    if (listUsers.length <= 0) {
        load();
    }

    //testa se usuario já existe
    let hasUser = false;
    for (let i = 0; i < listUsers.length; i++) {
        let user = listUsers[i];
        if (user.login == formUser.login) {
            hasUser = true;
            break;
        }
    }

    //se existe usuário com mesmo login
    // retorna false para função tryCreate
    if (hasUser) {
        return false;
    }

    //criar e persistir novo usuario
    let newUser = new User(formUser.login, formUser.password);
    listUsers.push(newUser);

    fs.appendFileSync("../resources/user.txt", "\r\n"+newUser.toString(), "utf8");

    return true;
}

module.exports = {
    User,
    valid,
    load,
    tryCreate
}

