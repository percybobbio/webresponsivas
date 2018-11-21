var index = 1
window.onload = function () {
    var index;
    muestrafoto(index);
}
function mueve(n) {
    muestrafoto(index += n)
}
function foto(n) {
    muestrafoto(index = n)
}
function muestrafoto(n) {
    var i
    var fotos = document.getElementsByClassName("foto")
    var muestras = document.getElementsByClassName("muestra")
    var texto = document.getElementById("texto")
    console.log(muestras.length)
    if (n>fotos.length) index = 1
    if (n<1) index = fotos.length
    /*Apagar visualizacion de fotos grandes*/
    for (var i = 0; i < fotos.length; i++) {
        fotos[i].style.display = "none";        
    }
    for (var i = 0; i < muestras.length; i++) {
        muestras[i].className = muestras.className.replace("activo","none");        
    }
    fotos[index-1].style.display="block"
    muestras[index-1].className += " activo"
    texto.innerHTML = muestras[index-1].alt
}