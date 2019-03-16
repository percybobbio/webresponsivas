var menu, desplazamiento;
window.onload = function(){
    menu = document.getElementById("menu");
    desplazamiento=menu.offsetTop;
}
window.onscroll = function (){
    if (window.pageYOffset>=desplazamiento) {
        menu.classList.add("fijar")
    } else {
        menu.classList.remove("fijar")
    }
}