/*let btn_encriptar = document.querySelector("#btnEncriptar");
let btn_desencriptar = document.querySelector("#btnDesencriptar");
let btn_copiar = document.querySelector("#btncopiar");
let btn_reiniciar = document.querySelector("#btnreiniciar");
let textareaingreso = document.querySelector("#txtIngreso");
let textareasalida = document.querySelector("#txtResultado");

let valorOriginal = "";
let valorEncriptado = ""; 

btn_encriptar.onclick = function(){
  
    let textoIngresado = textareaingreso.value;
    // Reemplazar 'a' por 'f00001'
    textoIngresado = textoIngresado.replace(/a/g, "f00001");    
    // Reemplazar 'e' por 'g00010'
    textoIngresado = textoIngresado.replace(/e/g, "g00010");    
    // Reemplazar 'i' por 'h00100'
    textoIngresado = textoIngresado.replace(/i/g, "h00100");    
    // Reemplazar 'o' por 'j00110'
    textoIngresado = textoIngresado.replace(/o/g, "j00110");    
    // Reemplazar 'u' por 'k01100'
    textoIngresado = textoIngresado.replace(/u/g, "k01100");     
    console.log("Texto ingresado:", textoIngresado);
    textareasalida.value = textoIngresado;
     
}

btn_desencriptar.onclick = function(){
  
    let textoIngresado = textareaingreso.value;
    // Reemplazar 'a' por 'f00001'
    textoIngresado = textoIngresado.replace(/f00001/g, "a");    
    // Reemplazar 'e' por 'g00010'
    textoIngresado = textoIngresado.replace(/g00010/g, "e");    
    // Reemplazar 'i' por 'h00100'
    textoIngresado = textoIngresado.replace(/h00100/g, "i");    
    // Reemplazar 'o' por 'j00110'
    textoIngresado = textoIngresado.replace(/j00110/g, "o");    
    // Reemplazar 'u' por 'k01100'
    textoIngresado = textoIngresado.replace(/k01100/g, "u");     
    console.log("Texto ingresado:", textoIngresado);
    textareasalida.value = textoIngresado;
     
}


btn_copiar.onclick = function(){
    let texcopiado = textareasalida.value;
    if (texcopiado.trim() !== "") {  // Verificar que el texto no esté vacío después de quitar espacios en blanco
        try {
            navigator.clipboard.writeText(texcopiado);
            alert("Texto copiado");
        } catch (error) {
            console.error("Error al copiar al portapapeles:", error);
            alert("No se pudo copiar el texto al portapapeles. Puedes intentarlo manualmente.");
        }
    } else {
        alert("El texto a copiar está vacío.");
    }

    textareaingreso.value="";
}


btn_reiniciar.onclick = function(){
    textareaingreso.value='';
    textareasalida.value='';
}
*/


document.addEventListener("DOMContentLoaded", function() {
    let btnEncriptar = document.querySelector("#btnEncriptar");
    let btnDesencriptar = document.querySelector("#btnDesencriptar");
    let btnCopiar = document.querySelector("#btncopiar");
    let btnReiniciar = document.querySelector("#btnreiniciar");
    let textareaIngreso = document.querySelector("#txtIngreso");
    let textareaResultado = document.querySelector("#txtResultado");
    let Alertamensaje = document.querySelector("#AlertaMensajeNoencontrado");
    let infoIngresoMensaje = document.querySelector(".InfoIngresoMensaje");

    let mapaEncriptado = {
        'a': 'f00001',
        'e': 'g00010',
        'i': 'h00100',
        'o': 'j00110',
        'u': 'k01100',
    };

    let mapaDesencriptado = {
        'f00001': 'a',
        'g00010': 'e',
        'h00100': 'i',
        'j00110': 'o',
        'k01100': 'u',
    };

    btnEncriptar.onclick = function() {
        let textoIngresado = textareaIngreso.value.toLowerCase();
        let textoEncriptado = encriptarTexto(textoIngresado, mapaEncriptado);
        textareaResultado.value = textoEncriptado;
        mensajeSalida("encriptar");
    }

    btnDesencriptar.onclick = function() {
        let textoIngresado = textareaIngreso.value.toLowerCase();
        let textoDesencriptado = desencriptarTexto(textoIngresado, mapaDesencriptado);
        textareaResultado.value = textoDesencriptado;
        mensajeSalida("desencriptar");
    }

    btnCopiar.onclick = function() {
        let textoCopiado = textareaResultado.value;
        if (textoCopiado.trim() !== "") {
            try {
                navigator.clipboard.writeText(textoCopiado);
                alert("Texto copiado");
                textareaIngreso.value = "";
                textareaResultado.value = "";
            } catch (error) {
                console.error("Error al copiar al portapapeles:", error);
                alert("No se pudo copiar el texto al portapapeles. Puedes intentarlo manualmente.");
            }
        } else {
            alert("El texto a copiar está vacío.");
        }
       
    }

    btnReiniciar.onclick = function() {
        textareaIngreso.value = '';
        textareaResultado.value = '';
        mensajeSalida();
    }

    function encriptarTexto(texto, mapa) {
        return texto.replace(/[aeiou]/g, letra => mapa[letra]);
    }

    function desencriptarTexto(texto, mapa) {
        return texto.replace(/f00001|g00010|h00100|j00110|k01100/g, secuencia => mapa[secuencia]);
    }

    function mensajeSalida(accion){
        if(textareaResultado.value.trim() !== "" && accion=="encriptar"){
            
            Alertamensaje.innerHTML = "El texto fue encriptado satisfactoriamente."
            infoIngresoMensaje.style.display = "none"
        }
        else if(textareaResultado.value.trim() !== "" && accion=="desencriptar"){
            Alertamensaje.innerHTML = "El texto fue desencriptado satisfactoriamente."
            infoIngresoMensaje.style.display = "none"
        }
        else{
            Alertamensaje.innerHTML = "Ningún mensaje fue encontrado"
            infoIngresoMensaje.style.display = "block"
        }
    }
});
