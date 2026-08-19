import leia from 'readline-sync';
import { desenhar } from './desenharCubo.js';
import { jogo } from './comecarJogo.js';
import { cube } from '../container/cuboMagico.js';

export function rotacionarFaceHorario(face) {
    var temp = face[0][0];
    face[0][0] = face[2][0];
    face[2][0] = face[2][2];
    face[2][2] = face[0][2];
    face[0][2] = temp;

    temp = face[0][1];
    face[0][1] = face[1][0];
    face[1][0] = face[2][1];
    face[2][1] = face[1][2];
    face[1][2] = temp;
}

export function rotacionarFaceAntiHorario(face) {
    var temp = face[0][0];
    face[0][0] = face[0][2];
    face[0][2] = face[2][2];
    face[2][2] = face[2][0];
    face[2][0] = temp;

    temp = face[0][1];
    face[0][1] = face[1][2];
    face[1][2] = face[2][1];
    face[2][1] = face[1][0];
    face[1][0] = temp;
}

export function girarF() {
    rotacionarFaceHorario(cube.front);

    var temp0 = cube.up[2][0];
    var temp1 = cube.up[2][1];
    var temp2 = cube.up[2][2];

    cube.up[2][0] = cube.left[2][2]; cube.up[2][1] = cube.left[1][2]; cube.up[2][2] = cube.left[0][2];
    cube.left[0][2] = cube.down[0][0]; cube.left[1][2] = cube.down[0][1]; cube.left[2][2] = cube.down[0][2];
    cube.down[0][0] = cube.right[2][0]; cube.down[0][1] = cube.right[1][0]; cube.down[0][2] = cube.right[0][0];
    cube.right[0][0] = temp0; cube.right[1][0] = temp1; cube.right[2][0] = temp2;
}

export function girarFInvertido() {
    rotacionarFaceAntiHorario(cube.front);

    var temp0 = cube.up[2][0];
    var temp1 = cube.up[2][1];
    var temp2 = cube.up[2][2];

    cube.up[2][0] = cube.right[0][0]; cube.up[2][1] = cube.right[1][0]; cube.up[2][2] = cube.right[2][0];
    cube.right[0][0] = cube.down[0][2]; cube.right[1][0] = cube.down[0][1]; cube.right[2][0] = cube.down[0][0];
    cube.down[0][0] = cube.left[0][2]; cube.down[0][1] = cube.left[1][2]; cube.down[0][2] = cube.left[2][2];
    cube.left[0][2] = temp2; cube.left[1][2] = temp1; cube.left[2][2] = temp0;
}

export function girarR() {
    rotacionarFaceHorario(cube.right);

    var temp0 = cube.up[2][2];
    var temp1 = cube.up[1][2];
    var temp2 = cube.up[0][2];

    cube.up[2][2] = cube.front[2][2]; cube.up[1][2] = cube.front[1][2]; cube.up[0][2] = cube.front[0][2];
    cube.front[0][2] = cube.down[0][2]; cube.front[1][2] = cube.down[1][2]; cube.front[2][2] = cube.down[2][2];
    cube.down[0][2] = cube.back[2][0]; cube.down[1][2] = cube.back[1][0]; cube.down[2][2] = cube.back[0][0];
    cube.back[0][0] = temp0; cube.back[1][0] = temp1; cube.back[2][0] = temp2;
}

export function girarRInvertido() {
    rotacionarFaceAntiHorario(cube.right);

    var temp0 = cube.up[2][2];
    var temp1 = cube.up[1][2];
    var temp2 = cube.up[0][2];

    cube.up[2][2] = cube.back[0][0]; cube.up[1][2] = cube.back[1][0]; cube.up[0][2] = cube.back[2][0];
    cube.back[0][0] = cube.down[2][2]; cube.back[1][0] = cube.down[1][2]; cube.back[2][0] = cube.down[0][2];
    cube.down[0][2] = cube.front[0][2]; cube.down[1][2] = cube.front[1][2]; cube.down[2][2] = cube.front[2][2];
    cube.front[0][2] = temp2; cube.front[1][2] = temp1; cube.front[2][2] = temp0;
}

export function girarL() {
    rotacionarFaceHorario(cube.left);

    var temp0 = cube.up[0][0];
    var temp1 = cube.up[1][0];
    var temp2 = cube.up[2][0];

    cube.up[0][0] = cube.back[2][2]; cube.up[1][0] = cube.back[1][2]; cube.up[2][0] = cube.back[0][2];
    cube.back[0][2] = cube.down[2][0]; cube.back[1][2] = cube.down[1][0]; cube.back[2][2] = cube.down[0][0];
    cube.down[0][0] = cube.front[0][0]; cube.down[1][0] = cube.front[1][0]; cube.down[2][0] = cube.front[2][0];
    cube.front[0][0] = temp0; cube.front[1][0] = temp1; cube.front[2][0] = temp2;
}

export function girarLInvertido() {
    rotacionarFaceAntiHorario(cube.left);

    var temp0 = cube.up[0][0];
    var temp1 = cube.up[1][0];
    var temp2 = cube.up[2][0];

    cube.up[0][0] = cube.front[0][0]; cube.up[1][0] = cube.front[1][0]; cube.up[2][0] = cube.front[2][0];
    cube.front[0][0] = cube.down[0][0]; cube.front[1][0] = cube.down[1][0]; cube.front[2][0] = cube.down[2][0];
    cube.down[0][0] = cube.back[2][2]; cube.down[1][0] = cube.back[1][2]; cube.down[2][0] = cube.back[0][2];
    cube.back[0][2] = temp2; cube.back[1][2] = temp1; cube.back[2][2] = temp0;
}

export function girarU() {
    rotacionarFaceHorario(cube.up);

    var temp0 = cube.front[0][0];
    var temp1 = cube.front[0][1];
    var temp2 = cube.front[0][2];

    cube.front[0][0] = cube.right[0][0]; cube.front[0][1] = cube.right[0][1]; cube.front[0][2] = cube.right[0][2];
    cube.right[0][0] = cube.back[0][0]; cube.right[0][1] = cube.back[0][1]; cube.right[0][2] = cube.back[0][2];
    cube.back[0][0] = cube.left[0][0]; cube.back[0][1] = cube.left[0][1]; cube.back[0][2] = cube.left[0][2];
    cube.left[0][0] = temp0; cube.left[0][1] = temp1; cube.left[0][2] = temp2;
}

export function girarUInvertido() {
    rotacionarFaceAntiHorario(cube.up);

    var temp0 = cube.front[0][0];
    var temp1 = cube.front[0][1];
    var temp2 = cube.front[0][2];

    cube.front[0][0] = cube.left[0][0]; cube.front[0][1] = cube.left[0][1]; cube.front[0][2] = cube.left[0][2];
    cube.left[0][0] = cube.back[0][0]; cube.left[0][1] = cube.back[0][1]; cube.left[0][2] = cube.back[0][2];
    cube.back[0][0] = cube.right[0][0]; cube.back[0][1] = cube.right[0][1]; cube.back[0][2] = cube.right[0][2];
    cube.right[0][0] = temp0; cube.right[0][1] = temp1; cube.right[0][2] = temp2;
}

export function girarD() {
    rotacionarFaceHorario(cube.down);

    var temp0 = cube.front[2][0];
    var temp1 = cube.front[2][1];
    var temp2 = cube.front[2][2];

    cube.front[2][0] = cube.left[2][0]; cube.front[2][1] = cube.left[2][1]; cube.front[2][2] = cube.left[2][2];
    cube.left[2][0] = cube.back[2][0]; cube.left[2][1] = cube.back[2][1]; cube.left[2][2] = cube.back[2][2];
    cube.back[2][0] = cube.right[2][0]; cube.back[2][1] = cube.right[2][1]; cube.back[2][2] = cube.right[2][2];
    cube.right[2][0] = temp0; cube.right[2][1] = temp1; cube.right[2][2] = temp2;
}

export function girarDInvertido() {
    rotacionarFaceAntiHorario(cube.down);

    var temp0 = cube.front[2][0];
    var temp1 = cube.front[2][1];
    var temp2 = cube.front[2][2];

    cube.front[2][0] = cube.right[2][0]; cube.front[2][1] = cube.right[2][1]; cube.front[2][2] = cube.right[2][2];
    cube.right[2][0] = cube.back[2][0]; cube.right[2][1] = cube.back[2][1]; cube.right[2][2] = cube.back[2][2];
    cube.back[2][0] = cube.left[2][0]; cube.back[2][1] = cube.left[2][1]; cube.back[2][2] = cube.left[2][2];
    cube.left[2][0] = temp0; cube.left[2][1] = temp1; cube.left[2][2] = temp2;
}

export function girarB() {
    rotacionarFaceHorario(cube.back);

    var temp0 = cube.up[0][0];
    var temp1 = cube.up[0][1];
    var temp2 = cube.up[0][2];

    cube.up[0][0] = cube.right[0][2]; cube.up[0][1] = cube.right[1][2]; cube.up[0][2] = cube.right[2][2];
    cube.right[0][2] = cube.down[2][2]; cube.right[1][2] = cube.down[2][1]; cube.right[2][2] = cube.down[2][0];
    cube.down[2][2] = cube.left[2][0]; cube.down[2][1] = cube.left[1][0]; cube.down[2][0] = cube.left[0][0];
    cube.left[2][0] = temp0; cube.left[1][0] = temp1; cube.left[0][0] = temp2;
}

export function girarBInvertido() {
    rotacionarFaceAntiHorario(cube.back);

    var temp0 = cube.up[0][0];
    var temp1 = cube.up[0][1];
    var temp2 = cube.up[0][2];

    cube.up[0][0] = cube.left[2][0]; cube.up[0][1] = cube.left[1][0]; cube.up[0][2] = cube.left[0][0];
    cube.left[2][0] = cube.down[2][2]; cube.left[1][0] = cube.down[2][1]; cube.left[0][0] = cube.down[2][0];
    cube.down[2][2] = cube.right[0][2]; cube.down[2][1] = cube.right[1][2]; cube.down[2][0] = cube.right[2][2];
    cube.right[0][2] = temp0; cube.right[1][2] = temp1; cube.right[2][2] = temp2;
}