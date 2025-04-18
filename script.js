document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navbarList = document.querySelector(".navbar-list");

    hamburger.addEventListener("click", () => {
        navbarList.classList.toggle("active");
    });
});
