"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
//estrutura de repetição e controle
let condition = true;
if (condition) {
    console.log('variável com valor true');
}
else {
    console.log('variável com valor false');
}
//usando operador ternário
//let perfil = 'admin';
//console.log(perfil=='superuser'?'Super usuário':'Administrador');
//nullish
//let perfil = 'admin';
let perfil = null;
console.log(perfil !== null && perfil !== void 0 ? perfil : 'Usuário comum');
console.log(perfil !== null && perfil !== void 0 ? perfil : 'Usuário comum');
//switch
let perfilUser = 'admin';
switch (perfilUser) {
    case 'superuser':
        console.log('Super usuário');
        break;
    case 'manager':
        console.log('Gerente');
        break;
    case 'admin':
        console.log('Administrador');
        break;
    case 'user':
        console.log('Comum Usuário');
        break;
    default:
        console.log(`Perfil ${perfilUser} não encontrado`);
        break;
}
//while
let condicao = true;
while (condicao) {
    console.log('aguardando...');
}
//do-while
let conditio = false;
{
    console.log('carregando...');
}
while (conditio)
    ;
//for
var languages = ['C#', 'Java', 'Python', 'Javascript', 'TypeScript'];
for (let i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}
//poo
class Account {
    constructor(title, sald) {
        this._numberAccount = Math.floor(Math.random() * 2000) + 1;
        this._title = title;
        this._sald = sald;
    }
    get numberAccount() {
        return this._numberAccount;
    }
    get title() {
        return this._title;
    }
    get sald() {
        return this._sald;
    }
    set numberAccount(value) {
        this._numberAccount = value;
    }
    set title(value) {
        this._title = value;
    }
    set sald(value) {
        this._sald = value;
    }
    consultSald() {
        return `O saldo atual é: ${this.sald}`;
    }
    addSald(sald) {
        this.sald + sald;
    }
    withdraw(value) {
        this.sald -= value;
    }
}
exports.Account = Account;
class AccountPF extends Account {
    constructor(cpf, numberAccount, title, sald) {
        super(title, sald);
        this.cpf = cpf;
        this.numberAccount = numberAccount;
    }
    withdraw(value) {
        if (this.sald > 0 && value <= this.sald) {
            this.withdraw(value);
        }
    }
    consult() {
        return `Saldo atual é: ${this.consultSald()}`;
    }
}
class AccountPJ extends Account {
    constructor(cnpj, numberAccount, title, sald) {
        super(title, sald);
        this.cnpj = cnpj;
        this.numberAccount = numberAccount;
    }
    withdraw(value) {
        this.withdraw(value);
    }
    consult() {
        return `Saldo atual é: ${this.consultSald()}`;
    }
}
const peopleJuri = new AccountPJ(56223031200216, 1, 'Joice', 2000);
const firstAccount = new Account('Joice', 2000);
console.log(peopleJuri);
console.log(firstAccount);
//interfaces
let people;
let people2;
people = { name: 'Joice', age: 18, email: 'joice@email.com', telephone: 5560331456 };
people2 = { name: 'Matheuw', age: 25, email: 'matheuw@email.com', account: 123456, cnpj: 88111478520987, openAccount: () => true };
console.log(people);
console.log(people2);
//criando uma função
function printArray(array) {
    array.forEach((element) => console.log(`Elemento do Array: ${element}`));
}
const number = [22, 55, 78, 47, 66];
const string = ['Typescript', 'Javascript'];
printArray(number);
printArray(string);
class classGenetics {
    constructor() {
        this.arr = [];
    }
    addToArray(value) {
        this.arr.push(value);
    }
    returnValue() {
        return this.arr;
    }
    removeItem(item) {
        let index = this.arr.indexOf(item);
        if (index > -1)
            this.arr.splice(index, 1);
    }
}
let classGenetics1 = new classGenetics();
classGenetics1.addToArray(4);
classGenetics1.addToArray(3);
classGenetics1.addToArray(2);
classGenetics1.addToArray(1);
console.log(classGenetics1.returnValue());
classGenetics1.removeItem(3);
console.log("Remove Item:", classGenetics1.returnValue());
let classGenetics2 = new classGenetics();
classGenetics2.addToArray('Typescript Init');
classGenetics2.addToArray('Javascript End');
console.log(classGenetics2.returnValue());
classGenetics2.removeItem('Typescript Init');
console.log('Remove Item:', classGenetics2.returnValue());
