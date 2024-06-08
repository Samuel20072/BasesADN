let result = document.querySelector("input");
let contenido = document.getElementById("contenido");
let btn = document.querySelector(".button");
let error = document.getElementById("error"); 

import { inicio } from "./main.js";
import { validNum } from "./validaciones.js";

export function ejercicio1() {
    contenido.innerHTML = "Ingrese 1 para crear una cadena de ADN de una sola base <br> <br>Ingrese 2 para crear una cadena aletoria ";
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
                inicio();
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
        error.textContent = ""
        btn.removeEventListener('click', handleFinalOption);
            break;

        default:
            error.textContent = "esta opcion no sirve"
            
            break;
    } 
}
function handlebasesInput(){
        let longitud = result.value
        let bases = ['A', 'T', 'C', 'G']
    
        if (validNum(longitud)) {
            let base = []
            for (let i = 0; i < 2; i++) {
                let item = randIndex(bases)
    
                let include = indexInclude(base, item)
                if (include) {
                    i--
                } else {
                    base.push(item)
                }
            }
    
            let string = '';
            for (let i = 0; i < longitud; i++) {
                string += randIndex(base);
            }
            show(string)
        } else {
            show("La longitud no es valida")
            exB()
        }
}
function randIndex(arr) {
    let numRand = Math.floor(Math.random() * arr.length);
    return arr[numRand]
}
function indexInclude(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}