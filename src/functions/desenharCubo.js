import leia from 'readline-sync';
import { rotacionarFaceHorario, rotacionarFaceAntiHorario, girarB, girarBInvertido, girarD, girarDInvertido, girarF, girarFInvertido, girarL, girarLInvertido, girarR, girarRInvertido, girarU, girarUInvertido } from './movimentos.js';
import { jogo } from './comecarJogo.js';
import { cube } from '../container/cuboMagico.js';

export function desenhar() {
    console.clear();
    console.log("  " + cube.up[0].join('') +
        "\n  " + cube.up[1].join('') +
        "\n  " + cube.up[2].join(''));

    for (var i = 0; i < 3; i++) {
        console.log(cube.left[i].join('') + " " + cube.front[i].join('') + " " + cube.right[i].join('') + " " + cube.back[i].join(''));
    }

    console.log("  " + cube.down[0].join('') +
        "\n  " + cube.down[1].join('') +
        "\n  " + cube.down[2].join(''));

    console.log("\nEscolha o movimento que você deseja fazer:");
}