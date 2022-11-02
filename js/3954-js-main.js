AOS.init({
    duration: 1500,
    offset: 0,
    anchorPlacement: 'center-bottom',
    once: true
});

var header = document.querySelector("header");
var topButton = document.querySelector("#back-to-top");
var footer = document.querySelector("footer");

// master function for all things that change on scroll
window.addEventListener("scroll", function () {
    updateOnScroll();
})

function updateOnScroll() { 
    header.classList.toggle("sticky", window.scrollY > 0);
    backToTop();
}

function backToTop() { // deal with back to top button
    topButton.classList.toggle("active", window.scrollY > 0.75 * window.innerHeight);
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
        topButton.style.bottom = "calc(26px + 4vw)";
    } else {
        topButton.style.bottom = "calc(20px + 1vw)";
    }
}

// deal with sticky nav if screen < 600px
function fixNav() {
    if (window.scrollY > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

window.onresize = function () {
    navOnResize();
    backToTop();
}

// deal with sticky nav on window resize
function navOnResize() {
    if (window.scrollY > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// reset site on load/refresh
updateOnScroll();

// don't start animations until everything is loaded
document.body.classList.add('js-loading');
//console.log("loading");
window.addEventListener("load", showPage);

function showPage() {
    document.body.classList.remove('js-loading');
    //console.log("done");
}