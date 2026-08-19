import leia from 'readline-sync';
import { rotacionarFaceHorario, rotacionarFaceAntiHorario, girarB, girarBInvertido, girarD, girarDInvertido, girarF, girarFInvertido, girarL, girarLInvertido, girarR, girarRInvertido, girarU, girarUInvertido } from './movimentos.js';
import { cube } from '../container/cuboMagico.js';
import { desenhar } from './desenharCubo.js';

export function jogo() {
    desenhar();
    var movimento = leia.keyInSelect(["F", "F'", "R", "R'", "L", "L'", "U", "U'", "D", "D'", "B", "B'"]);
    if (movimento === 0) {
        girarF();
        jogo();
    }
    else if (movimento === 1) {
        girarFInvertido();
        jogo();
    }
    else if (movimento === 2) {
        girarR();
        jogo();
    }
    else if (movimento === 3) {
        girarRInvertido();
        jogo();
    }
    else if (movimento === 4) {
        girarL();
        jogo();
    }
    else if (movimento === 5) {
        girarLInvertido();
        jogo();
    }
    else if (movimento === 6) {
        girarU();
        jogo();
    }
    else if (movimento === 7) {
        girarUInvertido();
        jogo();
    }
    else if (movimento === 8) {
        girarD();
        jogo();
    }
    else if (movimento === 9) {
        girarDInvertido();
        jogo();
    }
    else if (movimento === 10) {
        girarB();
        jogo();
    }
    else if (movimento === 11) {
        girarBInvertido();
        jogo();
    }
}