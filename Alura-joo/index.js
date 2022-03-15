class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 123123132;

cliente2.nome = "Vinicius";
cliente2.cpf = 22233344408;
cliente2.agencia = 1001;
cliente2.saldo = 0;
//  cliente3.nome = "Alice";
//  cliente3.cpf = 8882223309;
//  cliente3.agencia = 1001;
//  cliente3.saldo = 0;

console.log(cliente1)
console.log(cliente2)