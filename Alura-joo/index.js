import {Cliente} from "./Cliente.js"; // precisa colocar o module no package.json
import { Gerente } from "/inetpub/wwwroot/javascript/javascript-alura/alura-joo/funcionarios/gerente.js";
import { Diretor } from "/inetpub/wwwroot/javascript/javascript-alura/alura-joo/funcionarios/Diretor.js";
import {SistemaAutentificacao} from "../SistemaAutentificacao.js";

const diretor = new Diretor("Rodrigo",10000,12345678900);
const gerente = new Gerente("Marcelo",5000,123456789012)
const cliente = new Cliente("lais",7823123123, "456")

gerente.cadastrarSenha("123")
diretor.cadastrarSenha("123456")

const diretorEstaLogado = SistemaAutentificacao.login(diretor,"123456")
const gerenteEstaLogado = SistemaAutentificacao.login(gerente,"123")
const clienteEstaLogado = SistemaAutentificacao.login(cliente,"123")
console.log(gerenteEstaLogado,diretorEstaLogado,clienteEstaLogado)
