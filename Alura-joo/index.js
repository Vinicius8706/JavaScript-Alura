import {ContaCorrente} from "./ContaCorrente.js";
import {Cliente} from "./Cliente.js"; // precisa colocar o module no package.json

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Vinicius";
cliente2.cpf = 22233344408;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.depositar(-1);
contaCorrenteRicardo.sacar(50)
console.log(contaCorrenteRicardo);
