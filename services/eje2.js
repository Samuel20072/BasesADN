import { inicio } from "./main.js";
import { validNum } from "./validaciones.js";
let result = document.querySelector("input");
let contenido = document.getElementById("contenido");
let btn = document.querySelector(".button");
let error = document.getElementById("error");

export function ejercicio2() {
    console.log("ejercicio 2");
    contenido.innerHTML = "Ingrese 1 para saber en qué posición está su base en una constante<br><br>Ingrese 0 para volver al inicio";
    error.textContent = "";


    btn.addEventListener('click', handleButtonClick);
}

function handleButtonClick() {
    let result2 = result.value.trim();
    error.textContent = "";

    if (validNum(result2) === "Número") {
        switch (result2) {
            case "1":
                contenido.innerHTML = "Ingrese cualquier base";
                console.log("Caso 1");
                btn.removeEventListener('click', handleButtonClick); // Limpiar event listener previo
                btn.addEventListener('click', handleBase1Input);
                break;
            case "0":
                btn.removeEventListener('click', handleButtonClick); // Limpiar event listener previo
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

function handleBase1Input() {
    contenido.textContent = "";
    let base = result.value.trim().toUpperCase();

    const constantSequence = "ATGCGTACGTTAGC";

    console.log(`esta es la base ${base}`);

    let position = constantSequence.indexOf(base);

    if (position !== -1) {
        contenido.textContent = `La secuencia se encuentra por primera vez en la posición: ${position}`;
    } else {
        contenido.textContent = `La secuencia no se encuentra en la cadena dada, resultado: ${position}`;
    }

    error.textContent = "";

    result.value = ""; 
}
