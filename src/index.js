import leia from 'readline-sync';
import { rotacionarFaceHorario, rotacionarFaceAntiHorario, girarB, girarBInvertido, girarD, girarDInvertido, girarF, girarFInvertido, girarL, girarLInvertido, girarR, girarRInvertido, girarU, girarUInvertido } from './functions/movimentos.js';
import { desenhar } from './functions/desenharCubo.js';
import { jogo } from './functions/comecarJogo.js';
import { cube } from './container/cuboMagico.js';

var nome = leia.question("Digite o seu nome: ");
var perguntar = leia.keyInSelect(["Yes!", "No..."], nome + ", a vossa pessoa por acaso sabe montar um rubiks cube?");

if (perguntar === 0) {
    console.log("Que legal! Agora tente elevar um level desvendando o segredo do cubo no Java Script em 2D!");
}
else if (perguntar === 1) {
    console.log("Sem problemas, mas eu recomendo aprender a montar um cubo e memorizar a nomenclatura dos movimentos para entender a logica do rubiks cube.");
}

jogo();