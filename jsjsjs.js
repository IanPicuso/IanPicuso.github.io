let eleccionCompu;

function inicio() {

    document.getElementById('screen-1').classList.toggle('active');

    document.getElementById('screen-2').classList.toggle('active');

}

function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}

let victorias = 0;

let derrotas = 0;

let empates = 0;

let rachaVic = 0;

let mayorRacha = 0;

function Restart() {

    victorias = 0;

    derrotas = 0;

    empates = 0;

    rachaVic = 0;

    mayorRacha = 0;

    document.getElementsByClassName('draws')[0].textContent = "Empates: " + empates;

    document.getElementsByClassName('defeats')[0].textContent = "Derrotas: " + derrotas;

    document.getElementsByClassName('victories')[0].textContent = "Victorias: " + victorias;

    document.getElementsByClassName('streak-victories')[0].textContent = "Racha de victorias: " + rachaVic;

    document.getElementsByClassName('most-streak')[0].textContent = "Mayor racha de victorias: " + mayorRacha;

}

function Play(eleccion) {

    eleccionCompu = getRandomInt(1, 3);

    let texto = document.querySelector('.resultado');

    switch (eleccion) {

        case 1:

            switch (eleccionCompu) {

                case 1:

                    document.getElementById('screen-1').classList.toggle('active');

                    document.getElementById('screen-2').classList.toggle('active');

                    texto.textContent = "Tu elegiste Piedra y la computadora Piedra, esto es un empate";

                    empates++;

                    console.log(empates);

                    document.getElementsByClassName('draws')[0].textContent = "Empates: " + empates;

                    rachaVic = 0;

                    console.log(rachaVic);

                    document.getElementsByClassName('streak-victories')[0].textContent = "Racha de Victorias: " + rachaVic;

                    break;

                case 2:

                    document.getElementById('screen-1').classList.toggle('active');

                    document.getElementById('screen-2').classList.toggle('active');

                    texto.textContent = "Tu elegiste Piedra y la computadora Papel, por lo tanto perdiste";

                    derrotas++;

                    console.log(derrotas);

                    document.getElementsByClassName('defeats')[0].textContent = "Derrotas: " + derrotas;

                    rachaVic = 0;

                    console.log(rachaVic);

                    document.getElementsByClassName('streak-victories')[0].textContent = "Racha de Victorias: " + rachaVic;

                    break;

                case 3:

                    document.getElementById('screen-1').classList.toggle('active');

                    document.getElementById('screen-2').classList.toggle('active');

                    texto.textContent = "Tu elegiste Piedra y la computadora Tijera, ¡por lo tanto ganaste!";

                    victorias++;

                    console.log(victorias);

                    document.getElementsByClassName('victories')[0].textContent = "Victorias: " + victorias;

                    rachaVic++;

                    console.log(rachaVic);

                    document.getElementsByClassName('streak-victories')[0].textContent = "Racha de victorias: " + rachaVic;

                    mayorRacha++;

                    if (mayorRacha > rachaVic) {

                        mayorRacha--;

                    }

                    console.log(mayorRacha)

                    document.getElementsByClassName('most-streak')[0].textContent = "Mayor racha de victorias: " + mayorRacha;

                    break;
            }

            break;

        case 2:

            switch (eleccionCompu) {

                case 1:

                    document.getElementById('screen-1').classList.toggle('active');

                    document.getElementById('screen-2').classList.toggle('active');

                    texto.textContent = "Tu elegiste Papel y la computadora Piedra, ¡por lo tanto ganaste!";

                    victorias++;

                    console.log(victorias);

                    document.getElementsByClassName('victories')[0].textContent = "Victorias: " + victorias;

                    rachaVic++;

                    console.log(rachaVic);

                    document.getElementsByClassName('streak-victories')[0].textContent = "Racha de Victorias: " + rachaVic;

                    mayorRacha++;

                    if (mayorRacha > rachaVic) {

                        mayorRacha--;

                    }

                    console.log(mayorRacha)

                    document.getElementsByClassName('most-streak')[0].textContent = "Mayor racha de victorias: " + mayorRacha;

                    break;

                case 2:

                    document.getElementById('screen-1').classList.toggle('active');

                    document.getElementById('screen-2').classList.toggle('active');

                    texto.textContent = "Tu elegiste Papel y la computadora Papel, esto es un empate";

                    empates++;

                    console.log(empates);

                    document.getElementsByClassName('draws')[0].textContent = "Empates: " + empates;

                    rachaVic = 0;

                    console.log(rachaVic);

                    document.getElementsByClassName('streak-victories')[0].textContent = "Racha de Victorias: " + rachaVic;

                    break;

                case 3:

                    document.getElementById('screen-1').classList.toggle('active');

                    document.getElementById('screen-2').classList.toggle('active');

                    texto.textContent = "Tu elegiste Papel y la computadora Tijera, por lo tanto perdiste";

                    derrotas++;

                    console.log(derrotas);

                    document.getElementsByClassName('defeats')[0].textContent = "Derrotas: " + derrotas;

                    rachaVic = 0;

                    console.log(rachaVic);

                    document.getElementsByClassName('streak-victories')[0].textContent = "Racha de Victorias: " + rachaVic;

                    break;

            }
            break;

        case 3:

            switch (eleccionCompu) {

                case 1:
                    document.getElementById('screen-1').classList.toggle('active');

                    document.getElementById('screen-2').classList.toggle('active');

                    texto.textContent = "Tu elegiste Tijera y la computadora Piedra, por lo tanto perdiste";

                    derrotas++;

                    console.log(derrotas);

                    document.getElementsByClassName('defeats')[0].textContent = "Derrotas: " + derrotas;

                    rachaVic = 0;

                    console.log(rachaVic);

                    document.getElementsByClassName('streak-victories')[0].textContent = "Racha de Victorias: " + rachaVic;

                    break;

                case 2:
                    document.getElementById('screen-1').classList.toggle('active');

                    document.getElementById('screen-2').classList.toggle('active');

                    texto.textContent = "Tu elegiste Tijera y la computadora Papel, ¡por lo tanto ganaste!";

                    victorias++;

                    console.log(victorias);

                    document.getElementsByClassName('victories')[0].textContent = "Victorias: " + victorias;

                    rachaVic++;

                    console.log(rachaVic);

                    document.getElementsByClassName('streak-victories')[0].textContent = "Racha de Victorias: " + rachaVic;

                    mayorRacha++;

                    if (mayorRacha > rachaVic) {

                        mayorRacha--;

                    }

                    console.log(mayorRacha)

                    document.getElementsByClassName('most-streak')[0].textContent = "Mayor racha de victorias: " + mayorRacha;

                    break;

                case 3:

                    document.getElementById('screen-1').classList.toggle('active');

                    document.getElementById('screen-2').classList.toggle('active');

                    texto.textContent = "Tu elegiste Tijera y la computadora Tijera, esto es un empate";

                    empates++;

                    console.log(empates);

                    document.getElementsByClassName('draws')[0].textContent = "Empates: " + empates;

                    rachaVic = 0;

                    console.log(rachaVic);

                    document.getElementsByClassName('streak-victories')[0].textContent = "Racha de Victorias: " + rachaVic;

                    break;

            }
            break;

        default:
        break;
    }
}