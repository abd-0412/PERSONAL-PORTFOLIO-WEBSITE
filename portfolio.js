document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.querySelector(".nav-menu");

    menuIcon.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
});