function toggleMenu() {

    const nav = document.getElementById("mainNav");

    nav.classList.toggle("show");

}


/* Close mobile menu after clicking link */

document.querySelectorAll("#mainNav a").forEach(function(link) {

    link.addEventListener("click", function() {

        const nav = document.getElementById("mainNav");

        nav.classList.remove("show");

    });

});