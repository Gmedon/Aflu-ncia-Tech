var contagemnav = 1;
function navbarabrir() {
    var verificartamanhowidth = window.screen.width;
    console.log(verificartamanhowidth)
    if (contagemnav == 1) {
        if (verificartamanhowidth <= 770) {
            document.querySelector(".navbar-nav2").style.display = "flex";
            document.querySelector(".navbar-brand").style.display = "none"
        } else {
            document.querySelector(".navbar-nav").style.display = "flex";
            document.querySelector(".navbar-brand").style.display = "none"
        }
        document.querySelector(".toogle-nav").setAttribute("src", "img/x.png")
        contagemnav = 2;
    } else if (contagemnav == 2) {
        document.querySelector(".navbar-nav2").style.display = "none";
        document.querySelector(".navbar-nav").style.display = "none";
        document.querySelector(".navbar-brand").style.display = "flex"
        document.querySelector(".toogle-nav").setAttribute("src", "img/tooglenav.png")
        contagemnav = 1;
    }
}