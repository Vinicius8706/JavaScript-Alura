console.log(`Operdaores Lógicos`);

const listaDeDestinos = [`Salvador`, `Sao Paulo`, `Rio de Janeiro`];

const idadeComprador = 17;
const estaAcompanhada = true
let temPassagemComprada = false
const destino = "Rio de Janeiro";

console.log(`\n Destinos possíveis: ${listaDeDestinos}\n`);

console.log(listaDeDestinos);
const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true)
let contador = 0;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe")
    } else {
        console.log("Destino não existe")

    }
    contador++
}
console.log(listaDeDestinos);