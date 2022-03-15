console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`
const listaDeDestinos = [`Salvador`, `Sao Paulo`, `Rio de Janeiro`, `Curitiba`];
listaDeDestinos.push(`Minas Gerais`); // adicionando um item na lista
console.log(`Destinos possíveis: ${listaDeDestinos}\n`)

listaDeDestinos.splice(1, 1)
console.log(listaDeDestinos[1])