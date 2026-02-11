/* ==========================================================
   DESKTOP DROPDOWN NAVIGATION CONTROLLER
   Handles toggle behavior for primary navbar dropdown menus
   ========================================================== */

/* Select all top-level desktop navigation links */
const navLinks = document.querySelectorAll(".desktop-navbar-links");

/* Attach click event listener to each link */
navLinks.forEach(link => {
    link.addEventListener("click", function (e) {

        /* Prevent default anchor navigation */
        e.preventDefault();

        /* Prevent event bubbling to window (avoids instant closing) */
        e.stopPropagation();

        /* Identify the associated dropdown (next sibling element) */
        const currentDropdown = this.nextElementSibling;

        /* ----------------------------------------------------------
           Close all other dropdown menus before opening current one
           Ensures only one dropdown is visible at a time
        ----------------------------------------------------------- */
        document.querySelectorAll(
            ".about-dropdown, .academics-dropdown, .studentslife-dropdown"
        ).forEach(menu => {
            if (menu !== currentDropdown) {
                menu.style.display = "none";
            }
        });

        /* ----------------------------------------------------------
           Toggle current dropdown visibility
           Uses inline style manipulation (display: flex / none)
        ----------------------------------------------------------- */
        if (currentDropdown.style.display === "flex") {
            currentDropdown.style.display = "none";
        } else {
            currentDropdown.style.display = "flex";
        }
    });
});


/* ==========================================================
   GLOBAL CLICK LISTENER
   Closes all desktop dropdowns when clicking outside navbar
   ========================================================== */

window.addEventListener("click", function () {
    document.querySelectorAll(
        ".about-dropdown, .academics-dropdown, .studentslife-dropdown"
    ).forEach(menu => {
        menu.style.display = "none";
    });
});




/* ==========================================================
   MOBILE SIDEBAR TOGGLE FUNCTION
   Controls sidebar and overlay visibility
   Triggered via hamburger icon & close button
   ========================================================== */

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
}



/* ==========================================================
   MOBILE DROPDOWN CONTROLLER
   Allows accordion-style behavior inside mobile sidebar
   ========================================================== */

/* Select all mobile dropdown containers */
document.querySelectorAll(".mobile-dropdown").forEach(item => {

    item.addEventListener("click", function () {

        /* ------------------------------------------------------
           Close all other mobile dropdowns first
           Ensures accordion behavior (single active section)
        ------------------------------------------------------- */
        document.querySelectorAll(".mobile-dropdown").forEach(drop => {
            if (drop !== this) {
                drop.classList.remove("active");
            }
        });

        /* Toggle current dropdown active state */
        this.classList.toggle("active");
    });
});
