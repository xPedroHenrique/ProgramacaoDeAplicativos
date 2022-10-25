/**
 * Classe pessoa
 * atributos
 * 1 - Nome
 * 4 - numero telefone
 * 5 - e-mail
 * 6 - cpf
 * 7 - endereço
 * 8 - estado civil
 * 9 - data nascimento
 * 
 * métodos
 * 1 - cadastrar nova pessoa
 * 2 - deletar pessoa
 * 3 - editar pessoa
 * 5 - consultar pessoa
 */

class Person {
    constructor(name, phone, email, cpf, adress, maritalState, birthDate){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.cpf = cpf;
        this.adress = adress;
        this.maritalState = maritalState;
        this.birthDate = birthDate;
    }
}

module.exports = {
    Person
}