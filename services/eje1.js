let result = document.querySelector("input");
let contenido = document.getElementById("contenido");
let btn = document.querySelector(".button");
let error = document.getElementById("error");

import { inicio } from "./main.js";
import { validNum } from "./validaciones.js";

export function ejercicio1() {
    contenido.innerHTML = "Ingrese 1 para crear una cadena de ADN de una sola base <br> <br>Ingrese 2 para crear una cadena aletoria <br> <br> Ingrese 3 para una cadena de longitud multiplo de 10 <br> <br> Ingrese 4 para una cadena de dos bases aletorias y de como van estar compuestas. <br> <br> Ingrese 0 para volver al inicio";
    error.textContent = "";

    btn.addEventListener('click', handleButtonClick);
}

function handleButtonClick() {
    let result2 = result.value.trim();
    error.textContent = "";

    if (validNum(result2) === "Número") {
        switch (result2) {
            case "1":
                btn.removeEventListener('click', handleButtonClick);
                btn.addEventListener('click', handleBaseInput);
                contenido.innerHTML = "Ingrese la base que quiere que sea la cadena <br> Las bases son: A, T, C, G";
                break;
            case "2":
                btn.removeEventListener('click', handleButtonClick);
                btn.addEventListener('click', handlebasesInput);
                contenido.innerHTML = "Ingrese la longitud que quiere que sea la cadena";
                break;
            case "3":
                btn.removeEventListener('click', handleButtonClick);
                btn.addEventListener('click', handlebases2Input);
                contenido.innerHTML = "Ingrese la longitud de la cadena debe ser un múltiplo de 10";
                break;
            case "4":
                btn.removeEventListener('click', handleButtonClick);
                btn.addEventListener('click', handlebases3InputStep1);
                contenido.innerHTML = "Ingrese la longitud de la cadena debe ser un múltiplo de 10";
                break;
            case "0":
                btn.removeEventListener('click', handleButtonClick);
                btn.addEventListener('click', inicio);
             break;
            default:
                error.textContent = "Esta no es una opción que esté disponible en el sistema";
                break;
        }
    } else {
        error.textContent = "Esta no es una opción que esté disponible en el sistema";
    }

    result.value = "";
}

function handleBaseInput() {
    let base = result.value.trim().toUpperCase();
    let bases = ["A", "T", "C", "G"];
    error.textContent = "";

    if (validNum(base) === "Letra") {
        if (bases.includes(base)) {
            contenido.innerHTML = "Ingrese la longitud que quiere que sea la cadena";
            result.value = "";

            btn.removeEventListener('click', handleBaseInput);
            btn.addEventListener('click', handleLengthInput.bind(null, base));
        } else {
            error.textContent = "La base ingresada no es válida";
        }
    } else {
        error.textContent = "La base ingresada no es válida";
    }
}

function handleLengthInput(base) {
    let longitud = result.value.trim();
    error.textContent = "";

    if (!isNaN(longitud) && longitud > 0) {
        longitud = parseInt(longitud, 10);
        let cadenaUniBase = new Array(longitud).fill(base).join('');
        contenido.innerHTML = `Cadena resultante: ${cadenaUniBase} <br> <br> Ingrese 1 para crear otra cadena o 0 para salir`;
        btn.removeEventListener('click', handleLengthInput);
        btn.addEventListener('click', handleFinalOption);
    } else {
        error.textContent = "La longitud ingresada no es válida";
    }
}

function handleFinalOption() {
    btn.removeEventListener('click', handleLengthInput);
    let option = result.value.trim();
    error.textContent = "";
    switch (option) {
        case "1":
            btn.removeEventListener('click', handleFinalOption);
            ejercicio1();
            break;
        case "0":
            contenido.innerHTML = "Gracias por usar el programa.";
            error.textContent = "";
            btn.removeEventListener('click', handleFinalOption);
            break;
        default:
            error.textContent = "Esta opción no es válida";
            break;
    }
}

function handlebasesInput() {
    let longitud = result.value;
    let bases = ['A', 'T', 'C', 'G'];

    if (validNum(longitud)) {
        let base = [];
        for (let i = 0; i < 2; i++) {
            let item = randIndex(bases);

            if (!base.includes(item)) {
                base.push(item);
            } else {
                i--;
            }
        }

        let basefinal = '';
        for (let i = 0; i < longitud; i++) {
            basefinal += randIndex(base);
        }
        contenido.innerHTML = `La base aleatoria es ${basefinal} <br> <br> Ingrese 1 para crear otra cadena o 0 para salir`;
        btn.removeEventListener('click', handlebasesInput);
        btn.addEventListener('click', handleFinalOption);
    } else {
        error.textContent = "La longitud no es válida";
    }
}

function randIndex(arr) {
    let numRand = Math.floor(Math.random() * arr.length);
    return arr[numRand];
}

function handlebases2Input() {
    let longitud = result.value;
    console.log("Longitud:", longitud);

    if (longitud % 10 !== 0) {
        error.textContent = "La longitud no es un múltiplo de 10. Por favor, ingrese nuevamente.";
        return;
    }

    let bases = ['A', 'T', 'C', 'G'];
    let baseCounts = {
        'A': 0,
        'T': 0,
        'C': 0,
        'G': 0
    };

    let requiredCounts = {
        'A': 3,
        'T': 2,
        'C': 4,
        'G': 1
    };

    let string = '';
    while (string.length < longitud) {
        let base = randIndex(bases);
        if (baseCounts[base] < requiredCounts[base]) {
            string += base;
            baseCounts[base]++;
        }
    }

    contenido.innerHTML = `Cadena generada: ${string} <br> <br> Ingrese 1 para crear otra cadena o 0 para salir`;
    btn.removeEventListener('click', handlebases2Input);
    btn.addEventListener('click', handleFinalOption);
    error.textContent = "";
}

function handlebases3InputStep1() {
    let longitud = parseInt(result.value.trim(), 10);
    error.textContent = "";

    if (isNaN(longitud) || longitud <= 0 || longitud % 10 !== 0) {
        error.textContent = "La longitud no es un múltiplo de 10. Por favor, ingrese nuevamente.";
        return;
    }

    contenido.innerHTML = "Ingrese el porcentaje de la primera base (entre 1 y 99)";
    btn.removeEventListener('click', handlebases3InputStep1);
    btn.addEventListener('click', handlebases3InputStep2.bind(null, longitud));
    result.value = "";
}

function handlebases3InputStep2(longitud) {
    let porcentaje = parseInt(result.value.trim(), 10);
    error.textContent = "";

    if (isNaN(porcentaje) || porcentaje < 1 || porcentaje > 99) {
        error.textContent = "El porcentaje debe estar entre 1% y 99%. Por favor, ingrese nuevamente.";
        return;
    }

    let bases = ['A', 'T', 'C', 'G'];
    let base1 = bases[Math.floor(Math.random() * bases.length)];
    let base2;
    do {
        base2 = bases[Math.floor(Math.random() * bases.length)];
    } while (base2 === base1);

    let base1Count = Math.floor((porcentaje / 100) * longitud);
    let base2Count = longitud - base1Count;

    let string = '';

    for (let i = 0; i < base1Count; i++) {
        string += base1;
    }

    for (let i = 0; i < base2Count; i++) {
        string += base2;
    }

    string = string.split('').sort(() => Math.random() - 0.5).join('');

    contenido.innerHTML = `Cadena generada: ${string} <br> <br> Ingrese 1 para crear otra cadena o 0 para salir`;
    btn.removeEventListener('click', handlebases3InputStep2);
    btn.addEventListener('click', handleFinalOption);
    result.value = "";
}
