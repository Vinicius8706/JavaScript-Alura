import {ContaCorrente} from "./ContaCorrente.js";
import {Cliente} from "./Cliente.js"; // precisa colocar o module no package.json
import {ContaPoupanca} from "./ContaPoupanca.js"; // precisa colocar o module no package.json
import {Conta} from "./Conta.js";

const cliente1 = new Cliente('Ricardo',11122233309);
const cliente2 = new Cliente("Alice",88822233309);

const contaCorrenteRicardo = new Conta(0,cliente1,1001);
contaCorrenteRicardo.depositar(500)

const contaPoupanca = new Conta(50,cliente1,1001);

console.log(contaPoupanca)

