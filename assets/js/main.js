//!     Template Functions
//  Create Element
const bCreateElement = function (element, className, id, text) {
    var newElement = document.createElement(element);
    className !== null ? (newElement.className = className) : null;
    id !== null ? (newElement.id = id) : null;
    if (text !== null) {
        newElement.appendChild(document.createTextNode(text));
    }

    return newElement;
};
//  Switch The Classes
function switchClasses(element, class1, class2) {
    if (element.classList.contains(class1)) {
        element.classList.remove(class1);
        element.classList.add(class2);
    } else {
        element.classList.remove(class2);
        element.classList.add(class1);
    }
}
//  Function To Switch The Active Class
const switchClassLinks = (links, href) => {
    links.forEach((link) => {
        link.classList.remove("active");
    });
    document
        .querySelector(`.navbar a[href="#${href}"]`)
        .classList.add("active");
};
//  Set The Animation Of Loading Elements
function setAnimtion(aniElement, lastSection, windowHeight, numberCount) {
    if (close) {
        return;
    }
    close = bReachSection(lastSection, windowHeight) ? true : false;
    aniElement.forEach((e) => {
        if (bReachSection(e, windowHeight)) {
            e.style.animation = `${e.getAttribute(
                "ani"
            )} 1s .3s linear forwards`;
        }
    });
    if (!opened && bReachSection(numberCount[0], windowHeight)) {
        opened = true;
        numberCount.forEach((e) => {
            Increase(e);
        });
    }
}
//  Check If Reach To Section
function bReachSection(element, window) {
    var elementOffsetTop = element.offsetTop,
        elementOuterHeight = element.offsetHeight,
        windowScollTop = this.pageYOffset;
    return windowScollTop >=
        elementOffsetTop + elementOuterHeight - window * 1.5
        ? true
        : false;
}
//  Increase The Number In Counts Section
function Increase(el) {
    currentNumber = 0;
    var number = +el.dataset.num;
    const timer = setInterval(function () {
        currentNumber++;
        el.textContent = currentNumber;
        if (currentNumber >= number) {
            clearInterval(timer);
        }
    }, 50);
}
//  To Check If The Section Is In The Viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Check if the observed element is intersecting
        if (entry.isIntersecting) {
            var sectionID = entry.target.id;
            switch (sectionID) {
                case "home":
                    switchClassLinks(headerLinks, sectionID);
                    break;
                case "about":
                    switchClassLinks(headerLinks, sectionID);
                    break;
                case "services":
                    switchClassLinks(headerLinks, sectionID);
                    break;
                case "portfolio":
                    switchClassLinks(headerLinks, sectionID);
                    break;
                case "team":
                    switchClassLinks(headerLinks, sectionID);
                    break;
                case "contact":
                    switchClassLinks(headerLinks, sectionID);
                    break;
                default:
                    break;
            }
        }
    });
});
//!     Variables
//  Get The Height Of Window
const windowHeight = innerHeight;
//  Get The Header
let header = document.getElementById("header"),
    //  Get The Navigation Bar Of The Header Section
    nav = document.getElementById("navbar"),
    //  Get The Bar Button From Header Section
    navButton = document.getElementById("mobile-nav-tog"),
    //  Element That Have A Animation Loading
    aniElement = document.querySelectorAll("[ani]"),
    //  Check If You Make All Animations Of Loading Element
    close = false,
    //  Get The Last Element That Has The Animation Loading
    contactSection = document.getElementById("contact"),
    //  Get The Counts Element To Set The Animation Of Increase Numbers
    countElement = document.querySelectorAll("[data-num]"),
    //  To Check If The Numbers Reached
    opened = false,
    //  Get The Loading Page
    loading = document.getElementById("loading"),
    //  Get The Button Of Up Move
    upButton = document.getElementById("up-button"),
    //  Get All sections
    sectionsPage = document.querySelectorAll("section"),
    //  Get THe Links From Header Navbar
    headerLinks = document.querySelectorAll("header .navbar > ul > li > a");
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
    if (e.target.classList.contains("port-action")) {
        document.querySelectorAll(".portfolio .actions button").forEach((e) => {
            e.classList.remove("active");
        });
        e.target.classList.add("active");
        if (e.target.getAttribute("data-action") == "all") {
            document.querySelectorAll(".portfolio .item").forEach((e) => {
                e.classList.add("show");
            });
        } else {
            document.querySelectorAll(".portfolio .item").forEach((e) => {
                e.classList.remove("show");
            });
            document
                .querySelectorAll(
                    `.portfolio .item[data-type="${e.target.getAttribute(
                        "data-action"
                    )}"]`
                )
                .forEach((e) => {
                    e.classList.add("show");
                });
        }
    }
});
// Loading Window
window.addEventListener("load", (e) => {
    //  Remove Load Page
    loading.remove();
    //  Toggle The Animation Of Loading Elements
    setAnimtion(aniElement, contactSection, windowHeight, countElement);
});
//  Scroll Window
window.onscroll = function () {
    //  Toggle The Animation Of Loading Elements
    setAnimtion(aniElement, contactSection, windowHeight, countElement);
    if (window.scrollY > 60) {
        upButton.classList.add("show");
        header.setAttribute("scrolled", "true");
    } else {
        upButton.classList.remove("show");
        header.setAttribute("scrolled", "false");
    }
};
//  Toggle Slider Client Section
const swiper = new Swiper(".clients .swiper", {
    loop: true,
    autoplay: {
        delay: 6000,
    },
    slidesPerView: 2,
    spaceBetween: 50,

    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
        dynamicMainBullets: 8,
    },
    breakpoints: {
        575.9: {
            slidesPerView: 4,
            spaceBetween: 75,
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 125,
        },
    },
});
//  Toggle Slider Testimonials Section
const swiperTesti = new Swiper(".testi .swiper", {
    loop: true,
    autoplay: {
        delay: 6000,
    },
    slidesPerView: 1,
    spaceBetween: 50,

    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
        dynamicMainBullets: 8,
    },
});
//  To Switch The Class Active Of The Links On The Header
Array.from(sectionsPage).forEach((section) => {
    observer.observe(section);
});
