console.log(`Operdaores Lógicos`);

const listaDeDestinos = [`Salvador`, `Sao Paulo`, `Rio de Janeiro`];

const idadeComprador = 17;
const estaAcompanhada = true
const temPassagemComprada = true

console.log(`Destinos possíveis: ${listaDeDestinos}\n`);

console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {

    console.log("Comprador maior de idade\n");
    listaDeDestinos.splice(2, 1);

} else {
    console.log("Não é maior de idade\n");
}

console.log("Embarque\n\n")

if (idadeComprador > 18 && temPassagemComprada == true) {
    console.log("Boa viagem")
} else {
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);