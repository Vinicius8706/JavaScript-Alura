export class Conta {
  constructor(tipo, saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial;
    this._cliente = cliente
    this._agencia = agencia
    if (this.constructor == Conta) {
      throw new Error("Você não deveria entrar nas instancias desse objeto, pois ela é uma classe abstrata")
    }
  }


  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {

      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  // Método abstrato
  sacar(valor) { // protege o sistema
    throw new Error("O método sacar da conta é abstrato.")
  }


  _sacar(valor, taxa) {
    const valorSacado = taxa * valor
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado
      return valorSacado
    }
    return 0;
  }

  depositar(valor) {
    if (valor <= 100) {
      return;
    }

    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor)
    conta.depositar(valorSacado);

  }
}