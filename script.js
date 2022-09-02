const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const botonCopy = document.querySelector(".copiar");
botonCopy.style.display = "none"

function botonEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage="none"
    inputTexto.value = ""
    botonCopy.style.display = "block"

}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase(); // devolverel valor de la cadena convertida en minúscula

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) { //includes devuelve true o false
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])//remplaza vocal por su respectiva palabra(0=e, se comienza siempre por el 0)
        }                
    }
    return stringEncriptada;

    
}

function botonDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage="none"
    inputTexto.value = ""  
    botonCopy.style.display = "block"
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]) //hacemos al revés que en la función encriptar
        }
    }

    return stringDesencriptada;
}

function copiar() {
    
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}