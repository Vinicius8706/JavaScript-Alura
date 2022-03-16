class Cliente {
    nome;
    cpf;
}
class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor; //consegue encapsular dentro de um metodo

        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
        }

    }
}

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
