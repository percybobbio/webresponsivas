window.onscroll=function(){
    if (document.body.scrollTop>20 || document.documentElement.scrollTop>20) {
        document.getElementById("menu").style.top="0"
    } else {
        document.getElementById("menu").style.top="-50px"
    }
}