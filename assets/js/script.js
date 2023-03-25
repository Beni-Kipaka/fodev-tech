'use strict';

// NAVBAR TOGGLE
const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navLinks = document.querySelector("[data-navbar-link]");

navToggleBtn.addEventListener("click", function(){
    this.classList.toggle("active");
    header.classList.toggle("nav-active");
});

for (let i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener("click", function(){
        header.classList.toggle("nav-active");
        navToggleBtn.classList.toggle("active");
    });
}





// HEADER SCROLL ACTIVE STATE and GO TO TOP
const goTopBtn = document.querySelector("[data-go-top]");



window.addEventListener("scroll", function(){
    if(window.scrollY >= 100){
        header.classList.add("active");
        goTopBtn.classList.add("active");
    }else{
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }
});












