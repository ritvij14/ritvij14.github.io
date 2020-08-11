var homeBtn = document.getElementById("home-nav");
var aboutBtn = document.getElementById("about-nav");
var expBtn = document.getElementById("exp-nav");
var contactBtn = document.getElementById("contact-nav");

var navButtons = [homeBtn, aboutBtn, expBtn, contactBtn];

navButtons.forEach((btn) => {
    btn.addEventListener("click", () => { navClick(btn) });
});

function navClick(btn) {
    if (!(btn.classList.contains("active"))) {
        var current = document.getElementsByClassName("active");
        current[0].classList.remove("active");
        btn.classList.add("active");
    }
}

function navFunction() {
    var nav = document.getElementsByClassName("navbar");
    nav[0].classList.add("responsive");
    nav[0].classList.add("topnav");
}