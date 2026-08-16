import leia from 'readline-sync';

const cube = {
    up: [
        ["⬜", "⬜", "⬜"],
        ["⬜", "⬜", "⬜"],
        ["⬜", "⬜", "⬜"]
    ],

    front: [
        ["🟩", "🟩", "🟩"],
        ["🟩", "🟩", "🟩"],
        ["🟩", "🟩", "🟩"]
    ],

    down: [
        ["🟨", "🟨", "🟨"],
        ["🟨", "🟨", "🟨"],
        ["🟨", "🟨", "🟨"]
    ],

    left: [
        ["🟧", "🟧", "🟧"],
        ["🟧", "🟧", "🟧"],
        ["🟧", "🟧", "🟧"]
    ],

    right: [
        ["🟥", "🟥", "🟥"],
        ["🟥", "🟥", "🟥"],
        ["🟥", "🟥", "🟥"]
    ],

    back: [
        ["🟦", "🟦", "🟦"],
        ["🟦", "🟦", "🟦"],
        ["🟦", "🟦", "🟦"]
    ],
}

function desenhar() {
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

function girarF() {
    var temp0 = cube.up[2][0];
    var temp1 = cube.up[2][1];
    var temp2 = cube.up[2][2];

    cube.up[2][0] = cube.left[2][2]; cube.up[2][1] = cube.left[1][2]; cube.up[2][2] = cube.left[0][2];
    cube.left[0][2] = cube.down[0][0]; cube.left[1][2] = cube.down[0][1]; cube.left[2][2] = cube.down[0][2];
    cube.down[0][0] = cube.right[2][0]; cube.down[0][1] = cube.right[1][0]; cube.down[0][2] = cube.right[0][0];
    cube.right[0][0] = temp0; cube.right[1][0] = temp1; cube.right[2][0] = temp2;
}

function girarFInvertido() {
    var temp0 = cube.up[2][0];
    var temp1 = cube.up[2][1];
    var temp2 = cube.up[2][2];

    cube.up[2][0] = cube.right[0][0]; cube.up[2][1] = cube.right[1][0]; cube.up[2][2] = cube.right[2][0];
    cube.right[0][0] = cube.down[0][2]; cube.right[1][0] = cube.down[0][1]; cube.right[2][0] = cube.down[0][0];
    cube.down[0][0] = cube.left[0][2]; cube.down[0][1] = cube.left[1][2]; cube.down[0][2] = cube.left[2][2];
    cube.left[0][2] = temp2; cube.left[1][2] = temp1; cube.left[2][2] = temp0;
}

function girarR() {
    var temp0 = cube.up[2][2];
    var temp1 = cube.up[1][2];
    var temp2 = cube.up[0][2];

    cube.up[2][2] = cube.front[2][2]; cube.up[1][2] = cube.front[1][2]; cube.up[0][2] = cube.front[0][2];
    cube.front[0][2] = cube.down[0][2]; cube.front[1][2] = cube.down[1][2]; cube.front[2][2] = cube.down[2][2];
    cube.down[0][2] = cube.back[2][0]; cube.down[1][2] = cube.back[1][0]; cube.down[2][2] = cube.back[0][0];
    cube.back[0][0] = temp0; cube.back[1][0] = temp1; cube.back[2][0] = temp2;
}

function girarRInvertido() {
    var temp0 = cube.up[2][2];
    var temp1 = cube.up[1][2];
    var temp2 = cube.up[0][2];

    cube.up[2][2] = cube.back[0][0]; cube.up[1][2] = cube.back[1][0]; cube.up[0][2] = cube.back[2][0];
    cube.back[0][0] = cube.down[2][2]; cube.back[1][0] = cube.down[1][2]; cube.back[2][0] = cube.down[0][2];
    cube.down[0][2] = cube.front[0][2]; cube.down[1][2] = cube.front[1][2]; cube.down[2][2] = cube.front[2][2];
    cube.front[0][2] = temp2; cube.front[1][2] = temp1; cube.front[2][2] = temp0;
}

function girarL() {
    var temp0 = cube.up[0][0];
    var temp1 = cube.up[1][0];
    var temp2 = cube.up[2][0];

    cube.up[0][0] = cube.back[2][2]; cube.up[1][0] = cube.back[1][2]; cube.up[2][0] = cube.back[0][2];
    cube.back[0][2] = cube.down[2][0]; cube.back[1][2] = cube.down[1][0]; cube.back[2][2] = cube.down[0][0];
    cube.down[0][0] = cube.front[0][0]; cube.down[1][0] = cube.front[1][0]; cube.down[2][0] = cube.front[2][0];
    cube.front[0][0] = temp0; cube.front[1][0] = temp1; cube.front[2][0] = temp2;
}

function girarLInvertido() {
    var temp0 = cube.up[0][0];
    var temp1 = cube.up[1][0];
    var temp2 = cube.up[2][0];

    cube.up[0][0] = cube.front[0][0]; cube.up[1][0] = cube.front[1][0]; cube.up[2][0] = cube.front[2][0];
    cube.front[0][0] = cube.down[0][0]; cube.front[1][0] = cube.down[1][0]; cube.front[2][0] = cube.down[2][0];
    cube.down[0][0] = cube.back[2][2]; cube.down[1][0] = cube.back[1][2]; cube.down[2][0] = cube.back[0][2];
    cube.back[0][2] = temp2; cube.back[1][2] = temp1; cube.back[2][2] = temp0;
}

function girarU() {
    var temp0 = cube.front[0][0];
    var temp1 = cube.front[0][1];
    var temp2 = cube.front[0][2];

    cube.front[0][0] = cube.right[0][0]; cube.front[0][1] = cube.right[0][1]; cube.front[0][2] = cube.right[0][2];
    cube.right[0][0] = cube.back[0][0]; cube.right[0][1] = cube.back[0][1]; cube.right[0][2] = cube.back[0][2];
    cube.back[0][0] = cube.left[0][0]; cube.back[0][1] = cube.left[0][1]; cube.back[0][2] = cube.left[0][2];
    cube.left[0][0] = temp0; cube.left[0][1] = temp1; cube.left[0][2] = temp2;
}

function girarUInvertido() {
    var temp0 = cube.front[0][0];
    var temp1 = cube.front[0][1];
    var temp2 = cube.front[0][2];

    cube.front[0][0] = cube.left[0][0]; cube.front[0][1] = cube.left[0][1]; cube.front[0][2] = cube.left[0][2];
    cube.left[0][0] = cube.back[0][0]; cube.left[0][1] = cube.back[0][1]; cube.left[0][2] = cube.back[0][2];
    cube.back[0][0] = cube.right[0][0]; cube.back[0][1] = cube.right[0][1]; cube.back[0][2] = cube.right[0][2];
    cube.right[0][0] = temp0; cube.right[0][1] = temp1; cube.right[0][2] = temp2;
}

function girarD() {
    var temp0 = cube.front[2][0];
    var temp1 = cube.front[2][1];
    var temp2 = cube.front[2][2];

    cube.front[2][0] = cube.left[2][0]; cube.front[2][1] = cube.left[2][1]; cube.front[2][2] = cube.left[2][2];
    cube.left[2][0] = cube.back[2][0]; cube.left[2][1] = cube.back[2][1]; cube.left[2][2] = cube.back[2][2];
    cube.back[2][0] = cube.right[2][0]; cube.back[2][1] = cube.right[2][1]; cube.back[2][2] = cube.right[2][2];
    cube.right[2][0] = temp0; cube.right[2][1] = temp1; cube.right[2][2] = temp2;
}

function girarDInvertido() {
    var temp0 = cube.front[2][0];
    var temp1 = cube.front[2][1];
    var temp2 = cube.front[2][2];

    cube.front[2][0] = cube.right[2][0]; cube.front[2][1] = cube.right[2][1]; cube.front[2][2] = cube.right[2][2];
    cube.right[2][0] = cube.back[2][0]; cube.right[2][1] = cube.back[2][1]; cube.right[2][2] = cube.back[2][2];
    cube.back[2][0] = cube.left[2][0]; cube.back[2][1] = cube.left[2][1]; cube.back[2][2] = cube.left[2][2];
    cube.left[2][0] = temp0; cube.left[2][1] = temp1; cube.left[2][2] = temp2;
}

function girarB() {
    var temp0 = cube.up[0][0];
    var temp1 = cube.up[0][1];
    var temp2 = cube.up[0][2];

    cube.up[0][0] = cube.right[0][2]; cube.up[0][1] = cube.right[1][2]; cube.up[0][2] = cube.right[2][2];
    cube.right[0][2] = cube.down[2][2]; cube.right[1][2] = cube.down[2][1]; cube.right[2][2] = cube.down[2][0];
    cube.down[2][2] = cube.left[2][0]; cube.down[2][1] = cube.left[1][0]; cube.down[2][0] = cube.left[0][0];
    cube.left[2][0] = temp0; cube.left[1][0] = temp1; cube.left[0][0] = temp2;
}

function girarBInvertido() {
    var temp0 = cube.up[0][0];
    var temp1 = cube.up[0][1];
    var temp2 = cube.up[0][2];

    cube.up[0][0] = cube.left[2][0]; cube.up[0][1] = cube.left[1][0]; cube.up[0][2] = cube.left[0][0];
    cube.left[2][0] = cube.down[2][2]; cube.left[1][0] = cube.down[2][1]; cube.left[0][0] = cube.down[2][0];
    cube.down[2][2] = cube.right[0][2]; cube.down[2][1] = cube.right[1][2]; cube.down[2][0] = cube.right[2][2];
    cube.right[0][2] = temp0; cube.right[1][2] = temp1; cube.right[2][2] = temp2;
}

function jogo() {
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

jogo();