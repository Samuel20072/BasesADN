import { validNum } from "./validaciones.js";
import { ejercicio1 } from "./eje1.js";
import { ejercicio2 } from "./eje2.js";
let contenido = document.getElementById("contenido");
let result = document.querySelector("input");
let btn = document.querySelector(".button");
let error = document.getElementById("error");
export function inicio(){
    contenido.innerHTML = "Ingrese 1 para el ejercicio 1 <br> <br> Ingrese 2 para el ejercicio 2"
    error.textContent = ""
    btn.addEventListener('click', () => {

        let result1 = result.value;
        
        if ( validNum(result1) === "Número"){
            switch (result1) {
                case "1":
                    ejercicio1()
                    error.textContent = ""
                    break;
                case "2":
                    ejercicio2()
                    error.textContent = ""
                    break;
                default:
                    break;
            }
        }else{
            error.textContent = "Este no es una opcion que este disponible en el sistema"  
        }
     
    });
}
inicio()

