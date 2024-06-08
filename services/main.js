import { validNum } from "./validaciones.js";
import { ejercicio1 } from "./eje1.js";
let result = document.querySelector("input");
let btn = document.querySelector(".button");
let error = document.getElementById("error");
export function inicio(){
    btn.addEventListener('click', () => {
        let result1 = result.value;
        
        if ( validNum(result1) === "Número"){
            switch (result1) {
                case "1":
                    ejercicio1()
                    error.textContent = ""
                    break;
                case "2":
                    console.log("caso 2");
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


