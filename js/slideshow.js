var index = 1
window.onload = function () {
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
    var bolitas = document.getElementsByClassName("bolita")
    if (n>fotos.length) index = 1;
    if (n<1) index = fotos.length
    for (var i = 0; i < fotos.length; i++) {
        fotos[i].style.display = "none";        
    }
    for (var i = 0; i < bolitas.length; i++) {
        bolitas[i].className = bolitas.className.replace("activo","none");        
    }
    fotos[index-1].style.display="block"
    bolitas[index-1].className += " activo"
}