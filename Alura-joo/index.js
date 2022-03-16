class Cliente {
    nome;
    cpf;
}
class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor; //consegue encapsular dentro de um metodo

        }
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
        }

    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Vinicius";
cliente2.cpf = 22233344408;

//  cliente3.nome = "Alice";
//  cliente3.cpf = 8882223309;
//  cliente3.agencia = 1001;
//  cliente3.saldo = 0;
const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0
contaCorrenteRicardo.agencia = 1001

console.log(contaCorrenteRicardo.saldo)
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.depositar(-1);
console.log(contaCorrenteRicardo.saldo)
contaCorrenteRicardo.sacar(50)
console.log(contaCorrenteRicardo.saldo);
console.log(cliente1)
console.log(cliente2)
console.log(cliente2)