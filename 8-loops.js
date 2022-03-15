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
let destinoExiste = false;

// while (contador < 3) {
//     if (listaDeDestinos[contador] == destino) {
//          destinoExiste = true;

//         break
//     }
//     contador++
// }
console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem")
} else {
    console.log("Desculpe tivemos um erro")
}

for (let cont = 0; cont < 3; cont++) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;

        break
    }
    contador++
}