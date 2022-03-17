import {ContaCorrente} from "./Conta/ContaCorrente.js";
import {Cliente} from "./Cliente.js"; // precisa colocar o module no package.json
import {ContaPoupanca} from "./Conta/ContaPoupanca.js"; // precisa colocar o module no package.json

import { ContaSalario } from "./Conta/contasalario.js";

const cliente1 = new Cliente('Ricardo',11122233309);
const cliente2 = new Cliente("Alice",88822233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1,1001);
const contaPoupanca = new ContaPoupanca( 50,cliente1,1001);
const contaSalario = new ContaSalario(cliente1)
contaSalario.depositar(100)
contaSalario.sacar(10)
console.log(contaCorrenteRicardo)

console.log(contaPoupanca)

