
//!     Template Functions
//  Switch The Classes
function switchClasses(element, class1, class2) {
    if (element.classList.contains(class1)) {
        element.classList.remove(class1);
        element.classList.add(class2);
    } else {
        element.classList.remove(class2);
        element.classList.add(class1);
    }
}//!     Variables
//  Get The Height Of Window
const windowHeight = innerHeight;
//  Get The Header
let header = document.getElementById("header"),
    //  Get The Loading Page
    loading = document.getElementById("loading"),
    //  Get The Navigation Bar Of The Header Section
    nav = document.getElementById("navbar"),
    //  Get The Bar Button From Header Section
    navButton = document.getElementById("mobile-nav-tog"),
    //  Get The Button Of Up Move
    upButton = document.getElementById("up-button");
//!     Main
//  Click Event
document.addEventListener("click", (e) => {
    if (e.target == upButton) {
        window.scrollTo(0, 0);
    }
    if (e.target == navButton) {
        switchClasses(e.target.children[0], "fa-bars", "fa-xmark");
        e.target.classList.toggle("mobile");
        nav.classList.toggle("mobile");
    }
    if (
        e.target.parentElement.classList.contains("one") ||
        e.target.parentElement.classList.contains("two")
    ) {
        e.target.parentElement.classList.toggle("active");
    }
    if (
        e.target.getAttribute("href") &&
        !e.target.parentElement.classList.contains("dropdown")
    ) {
        nav.classList.remove("mobile");
        navButton.classList.remove("mobile");
        switchClasses(navButton.children[0], "fa-bars", "fa-xmark");
    }
});
// Loading Window
window.addEventListener("load", (e) => {
    //  Remove Load Page
    loading.remove();
});
//  Scroll Window
window.onscroll = function () {
    //  Toggle The Animation Of Loading Elements
    if (window.scrollY > 500) {
        upButton.classList.add("show");
        header.setAttribute("scrolled", "true");
    } else {
        upButton.classList.remove("show");
        header.setAttribute("scrolled", "false");
    }
};
//  Toggle Slider Portfolio Section
const swiperLanding = new Swiper(".prt-landing .swiper", {
    loop: true,
    autoplay: {
        delay: 6000,
    },
    slidesPerView: 1,

    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
        dynamicMainBullets: 3,
    },
});
