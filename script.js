function encriptar(){
    var texto = document.getElementById("input-mensaje").value.toLowerCase();

    //i es para que afecte masyusculas y minusculas
    //g para toda la linea
    //m para multiples lineas de untexto

    if(validarTexto(texto)){
        var txtEncriptado = texto.replace(/e/igm,"enter")
                                .replace(/o/igm,"ober")
                                .replace(/i/igm,"imes")
                                .replace(/a/igm,"ai")
                                .replace(/u/igm,"ufat");

        document.getElementById("chico-img").style.display = "none";
        document.getElementById("texto-info").style.display = "none";
        document.getElementById("texto-msg-resultado").innerHTML = txtEncriptado;
        document.getElementById("boton-copiar").style.display = "show";
        document.getElementById("boton-copiar").style.display = "inherit";
    }
}

function desEncriptar(){
    
    var texto = document.getElementById("input-mensaje").value.toLowerCase();

    //i es para que afecte mayusculasy minusculas
    //g para toda la linea
    //m para multiples lineas de un texto
    
    var txtDesencriptado = texto.replace(/enter/igm,"e")
                                .replace(/ober/igm,"o")
                                .replace(/imes/igm,"i")
                                .replace(/ai/igm,"a")
                                .replace(/ufat/igm,"u");

    document.getElementById("chico-img").style.display = "none";
    document.getElementById("texto-info").style.display = "none";
    document.getElementById("texto-msg-resultado").innerHTML = txtDesencriptado;
    document.getElementById("boton-copiar").style.display = "show";
    document.getElementById("boton-copiar").style.display = "inherit";
}

function copy(){
    var contenido = document.getElementById("texto-msg-resultado").value;
    navigator.clipboard.writeText(contenido);
    contenido.select();
    //contenido.value = "";
    document.getElementById("input-mensaje").value = " ";
    document.getElementById("texto-msg-resultado").value = " ";
    alert("!Se copió¡");
}

function  validarAcentos (texto){
    var acentos = /[áéíóúü]/;
    return acentos.test(texto);
}

function validarTexto(texto){
    if(validarAcentos(texto)){
        alert("El texto no debe tener acentos");
    }else{
        return true;
    }
}