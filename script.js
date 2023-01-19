function Encriptar (){
var frase = document.getElementById("textoEncriptado").value.toLowerCase();

/*i=toma minúsculas y mayúsculas, m es para que tome en cuenta múltiples líneas y g toma toda la línea u oración */
var textoEncriptado = frase.replace(/e/img, "enter"); /*Recibe lo que le llegue de frase y las e las remplaza por enter.*/ 
var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

document.getElementById("textoDesencriptado").innerHTML=textoEncriptado;
document.getElementById("ButtonCopiar").style.display="show";
document.getElementById("ButtonCopiar").style.display="inherit";


}

function Desencriptar (){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    
    /*i=toma minúsculas y mayúsculas, m es para que tome en cuenta múltiples líneas y g toma toda la línea u oración */
    var textoEncriptado = frase.replace(/enter/img, "e"); /*Recibe lo que le llegue de frase y las e las remplaza por enter.*/ 
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");
    
    document.getElementById("textoDesencriptado").innerHTML=textoEncriptado;
    }
    

    function copiar(){
        var contenido = document.querySelector("#textoDesencriptado");
        contenido.select();
        document.execCommand("copy");
    }
    