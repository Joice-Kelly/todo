class Account{
  numberAccount: number;
  title: string;
  sald: number;
  constructor(numberAccount: number, title: string, sald: number){
    this.numberAccount = numberAccount;
    this.title = title;
    this.sald = sald;
  }
  consultSald(): string{
    return `O saldo atual é: ${this.sald}`;
  }
  addSald(sald: number):void{
    this.sald + sald;
  }
  withdraw(value: number):void{
    this.sald -= value;
  }
}
class AccountPF extends Account{
  cpf: number;
  constructor(cpf: number, numberAccount: number, title: string, sald: number){
    super(numberAccount, title, sald);
    this.cpf = cpf;
  }
}
class AccountPJ extends Account{
  cnpj: number;
  constructor(cnpj: number, numberAccount: number, title: string, sald: number){
    super(numberAccount, title, sald);
    this.cnpj = cnpj;
  }
}
const peopleJuri = new AccountPJ(56223031200216, 1, 'Joice', 2000);